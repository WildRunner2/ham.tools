import React from 'react';
import './UsefulLinks.css';

interface LinkCategory {
  title: string;
  links: {
    name: string;
    url: string;
    description: string;
  }[];
}

const UsefulLinks: React.FC = () => {
  const linkCategories: LinkCategory[] = [
    {
      title: "Amateur Radio Organizations",
      links: [
        {
          name: "ARRL",
          url: "https://www.arrl.org",
          description: "American Radio Relay League - The national association for amateur radio"
        },
        {
          name: "IARU",
          url: "https://www.iaru.org",
          description: "International Amateur Radio Union"
        },
        {
          name: "PZK",
          url: "https://www.pzk.org.pl",
          description: "Polish Amateur Radio Union (Polski Związek Krótkofalowców)"
        },
        {
          name: "RSGB",
          url: "https://rsgb.org",
          description: "Radio Society of Great Britain"
        }
      ]
    },
    {
      title: "QSL & Logging",
      links: [
        {
          name: "QRZ.com",
          url: "https://www.qrz.com",
          description: "Ham radio callsign database and profiles"
        },
        {
          name: "LoTW",
          url: "https://lotw.arrl.org",
          description: "ARRL Logbook of the World"
        },
        {
          name: "eQSL.cc",
          url: "https://www.eqsl.cc",
          description: "Electronic QSL service"
        },
        {
          name: "HamQTH",
          url: "https://www.hamqth.com",
          description: "Ham radio callsign database"
        }
      ]
    },
    {
      title: "Propagation & Weather",
      links: [
        {
          name: "VOACAP",
          url: "https://www.voacap.com",
          description: "HF propagation prediction"
        },
        {
          name: "Solar-Terrestrial Data",
          url: "https://www.spaceweather.com",
          description: "Space weather and solar activity"
        },
        {
          name: "PSKReporter",
          url: "https://pskreporter.info",
          description: "Automatic Propagation Reporter"
        },
        {
          name: "DXToolBox",
          url: "https://dxtoolbox.appspot.com",
          description: "Propagation tools and predictions"
        }
      ]
    },
    {
      title: "Operating Tools",
      links: [
        {
          name: "DX Summit",
          url: "https://www.dxsummit.fi",
          description: "DX cluster spots and announcements"
        },
        {
          name: "Contest Calendar",
          url: "https://www.contestcalendar.com",
          description: "Amateur radio contest schedule"
        },
        {
          name: "POTA",
          url: "https://parksontheair.com",
          description: "Parks on the Air program"
        },
        {
          name: "SOTA",
          url: "https://www.sota.org.uk",
          description: "Summits on the Air"
        }
      ]
    },
    {
      title: "Technical Resources",
      links: [
        {
          name: "RF-Tools",
          url: "https://rf-tools.com",
          description: "RF calculators and conversion tools"
        },
        {
          name: "Ham Radio Prep",
          url: "https://hamradioprep.com",
          description: "License exam preparation"
        },
        {
          name: "ARRL Band Plans",
          url: "https://www.arrl.org/band-plans",
          description: "Frequency allocations and band plans"
        },
        {
          name: "Radio-Electronics",
          url: "https://www.radio-electronics.com",
          description: "Technical articles and tutorials"
        }
      ]
    },
    {
      title: "Digital Modes",
      links: [
        {
          name: "WSJT-X",
          url: "https://physics.princeton.edu/pulsar/k1jt/wsjtx.html",
          description: "Weak signal digital modes"
        },
        {
          name: "FT8 Operating Guide",
          url: "https://physics.princeton.edu/pulsar/k1jt/FT4_FT8_QEx.pdf",
          description: "Official FT8 operating procedures"
        },
        {
          name: "JS8Call",
          url: "http://js8call.com",
          description: "Keyboard-to-keyboard digital mode"
        },
        {
          name: "VARA HF",
          url: "https://rosmodem.wordpress.com",
          description: "High-speed HF data mode"
        }
      ]
    }
  ];

  return (
    <div className="useful-links">
      <div className="container">
        <div className="page-header">
          <h1>Useful Links</h1>
          <p className="page-subtitle">
            Curated collection of amateur radio resources, tools, and websites
          </p>
        </div>

        <div className="links-grid">
          {linkCategories.map((category, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{category.title}</h2>
              <div className="links-list">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card"
                  >
                    <div className="link-content">
                      <h3 className="link-name">{link.name}</h3>
                      <p className="link-description">{link.description}</p>
                      <div className="link-url">{link.url}</div>
                    </div>
                    <div className="link-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contribute-section">
          <div className="contribute-card">
            <h2>Suggest a Link</h2>
            <p>
              Know of a useful amateur radio resource that should be included? 
              Send me an email or contact me via QRZ.com to suggest additions to this list.
            </p>
            <div className="contribute-actions">
              <a 
                href="https://www.qrz.com/db/SP3FCK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact SP3FCK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
