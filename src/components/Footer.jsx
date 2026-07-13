import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h3 style={{margin:0}}>Mini Project</h3>
          <p style={{margin:0,fontSize:12,color:'#ddd'}}>Building small things with big ideas.</p>
        </div>

        <div style={styles.links}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.contact}>
          <div style={styles.row}>
            <span>📧</span>
            <a href="mailto:youremail@example.com" style={styles.link}>youremail@example.com</a>
          </div>
          <div style={styles.row}>
            <span>📍</span>
            <span style={{marginLeft:8}}>Your City, Country</span>
          </div>
        </div>
      </div>

      <div style={styles.copy}>© {new Date().getFullYear()} Mini Project — All rights reserved.</div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#111',
    color: '#fff',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 20,
    padding: '0 16px',
  },
  brand: { flex: '1 1 200px' },
  links: { display: 'flex', gap: 12, alignItems: 'center' },
  contact: { textAlign: 'right', flex: '1 1 200px' },
  row: { display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' },
  link: { color: '#9fd3c7', textDecoration: 'none' },
  copy: { textAlign: 'center', marginTop: 12, color: '#888', fontSize: 12 },
}

export default Footer