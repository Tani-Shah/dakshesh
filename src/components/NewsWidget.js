import { useEffect, useMemo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const TOP_N = 6;

// Public RSS feeds
const FEEDS = {
  world: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
  india: 'https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms',
};

// Public CORS proxy (works for quick projects; for reliability use your own proxy)
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

function NewsWidget() {
  const [region, setRegion] = useState('world');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState('');

  const feedUrl = useMemo(() => FEEDS[region], [region]);

  async function fetchNews() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${CORS_PROXY}${encodeURIComponent(feedUrl)}`);
      const text = await res.text();

      const xml = new window.DOMParser().parseFromString(text, 'text/xml');
      const entries = Array.from(xml.querySelectorAll('item'))
        .slice(0, TOP_N)
        .map((node) => ({
          title: node.querySelector('title')?.textContent?.trim() || '',
          link: node.querySelector('link')?.textContent?.trim() || '',
        }))
        .filter((x) => x.title && x.link);

      setItems(entries);
    } catch (e) {
      setItems([]);
      setError('Could not load RSS feed (CORS/proxy issue).');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  function stopSpeech() {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function speakHeadlines() {
    stopSpeech();

    const text = items.map((x, i) => `${i + 1}. ${x.title}`).join('. ');
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);

    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  }

  return (
    <Card className="text-white bg-dark text-center card-fill">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="mb-0">News</Card.Title>
          <Button size="sm" variant="secondary" onClick={fetchNews} disabled={loading}>
            {loading ? 'Loading…' : 'Refresh'}
          </Button>
        </div>

        <div className="d-flex gap-2 mt-3">
          <Form.Select size="sm" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="world">World</option>
            <option value="india">India</option>
          </Form.Select>

          {!speaking ? (
            <Button size="sm" variant="outline-light" onClick={speakHeadlines} disabled={!items.length}>
              Oral News
            </Button>
          ) : (
            <Button size="sm" variant="outline-warning" onClick={stopSpeech}>
              Stop
            </Button>
          )}
        </div>

        {error ? (
          <div className="text-warning mt-2" style={{ fontSize: '0.9em' }}>
            {error}
          </div>
        ) : null}

        <ListGroup variant="flush" className="mt-2">
          {items.map((x) => (
            <ListGroup.Item key={x.link} className="text-white bg-dark" style={{ fontSize: '0.9em' }}>
              <a className="text-light" href={x.link} target="_blank" rel="noreferrer">
                {x.title}
              </a>
            </ListGroup.Item>
          ))}
          {!loading && !items.length && !error ? (
            <ListGroup.Item className="text-white bg-dark" style={{ fontSize: '0.9em' }}>
              No headlines found.
            </ListGroup.Item>
          ) : null}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default NewsWidget;
