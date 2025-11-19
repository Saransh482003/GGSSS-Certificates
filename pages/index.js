import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';

export default function CertificatesPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/certificates');
        if (!res.ok) throw new Error('Failed to load data');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const teachers = useMemo(() => Object.keys(data), [data]);

  const students = useMemo(() => {
    let list = [];
    if (selectedTeacher) {
      list = data[selectedTeacher] || [];
    } else {
      // Flatten all students if no teacher selected
      list = teachers.reduce((acc, t) => acc.concat(data[t]), []);
    }
    if (search.trim()) {
      const term = search.toLowerCase();
      list = list.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.fatherName.toLowerCase().includes(term) ||
        s.event.toLowerCase().includes(term)
      );
    }
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [data, teachers, selectedTeacher, search]);

  return (
    <div className={styles.page}>
      <Head>
        <title>GGSSS Begumpur | Science Exhibition Certificates</title>
        <meta name="description" content="Download science exhibition certificates for GGSSS Begumpur students." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <div className={styles.heroSection}>
        <div className={styles.particlesContainer}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
        <header className={styles.header}>
          <div className={styles.schoolLogo}>🔬</div>
          <div className={styles.brand}>GGSSS Begumpur School [1413268]</div>
          <h1 className={styles.title}>
            <span className={styles.titleGradient}>Science Exhibition</span>
            <span className={styles.titleLight}>Certificates 2025</span>
          </h1>
          <p className={styles.subtitle}>🏆 Celebrating Young Scientists & Innovators 🌟</p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{students.length}</div>
              <div className={styles.statLabel}>Participants</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{teachers.length}</div>
              <div className={styles.statLabel}>Teachers</div>
            </div>
          </div>
        </header>
      </div>
      <section className={styles.controlsSection}>
        <div className={styles.controlsWrapper}>
          <div className={styles.controlGroup}>
            <label htmlFor="teacher" className={styles.label}>
              <span className={styles.labelIcon}>👨‍🏫</span>
              Filter by Teacher
            </label>
            <select
              id="teacher"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className={styles.select}
            >
              <option value="">All Teachers</option>
              {teachers.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className={styles.controlGroup}>
            <label htmlFor="search" className={styles.label}>
              <span className={styles.labelIcon}>🔍</span>
              Search Students
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, parent, or event..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
        {selectedTeacher && (
          <div className={styles.filterBadge}>
            Showing: {selectedTeacher}
            <button onClick={() => setSelectedTeacher('')} className={styles.clearBtn}>✕</button>
          </div>
        )}
      </section>
      <main className={styles.mainContent}>
        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading certificates...</p>
          </div>
        )}
        {error && (
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>⚠️</div>
            <p className={styles.errorText}>Error: {error}</p>
          </div>
        )}
        {!loading && !error && (
          <>
            {students.length === 0 ? (
              <div className={styles.emptyContainer}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3 className={styles.emptyTitle}>No certificates found</h3>
                <p className={styles.emptyText}>Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <div className={styles.resultsHeader}>
                  <h2 className={styles.resultsTitle}>Certificate Directory</h2>
                  <div className={styles.resultsCount}>{students.length} {students.length === 1 ? 'Certificate' : 'Certificates'}</div>
                </div>
                <div className={styles.grid}>
                  {students.map((student, idx) => {
                    const girlEmojis = ['👧', '👧🏻', '👧🏼', '🙋‍♀️', '🙋🏻‍♀️', '🙋🏼‍♀️', '💁‍♀️', '💁🏻‍♀️', '🧑‍🎓', '👩‍🎓', '👩‍🔬',];
                    const randomGirl = girlEmojis[student.id % girlEmojis.length];
                    
                    return (
                    <article key={student.id} className={styles.card} style={{ animationDelay: `${idx * 0.05}s` }}>
                      <div className={styles.cardGlow}></div>
                      <div className={styles.cardTop}>
                        <div className={styles.avatarCircle}>
                          {randomGirl}
                        </div>
                        <span className={styles.classTag}>
                          <span className={styles.classIcon}>🎓</span>
                          {student.class}-{student.section}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <h2 className={styles.studentName}>{student.name}</h2>
                        <div className={styles.infoGrid}>
                          <div className={styles.infoRow}>
                            <span className={styles.infoIcon}>👤</span>
                            <span className={styles.infoLabel}>Father:</span>
                            <span className={styles.infoValue}>{student.fatherName}</span>
                          </div>
                          <div className={styles.infoRow}>
                            <span className={styles.infoIcon}>🔬</span>
                            <span className={styles.infoLabel}>Event:</span>
                            <span className={styles.infoValue}>{student.event}</span>
                          </div>
                          <div className={styles.infoRow}>
                            <span className={styles.infoIcon}>👨‍🏫</span>
                            <span className={styles.infoLabel}>Teacher:</span>
                            <span className={styles.infoValue}>{student.teacher}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardFooter}>
                        <a
                          href={student.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.downloadBtn}
                        >
                          <span className={styles.btnIcon}>📥</span>
                          <span>Download Certificate</span>
                          <span className={styles.btnArrow}>→</span>
                        </a>
                      </div>
                    </article>
                  );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© 2025 GGSSS Begumpur School • Science Exhibition</p>
          <p className={styles.footerSubtext}>Empowering young minds to explore & innovate</p>
        </div>
      </footer>
    </div>
  );
}
