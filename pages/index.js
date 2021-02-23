import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Index() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      style={{ height: '110vh', padding: '1rem', display: 'grid', gap: '1rem', alignContent: 'start', maxWidth: 600 }}
    >
      <pre>Theme: {theme}</pre>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <button onClick={() => setTheme('light')}>Light</button>
        </div>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
      <div>
        <input type='text' placeholder='Testing input' />
      </div>
    </div>
  );
}
