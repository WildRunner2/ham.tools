import React, { useState, useEffect } from 'react';
import './Gallery.css';

interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  uploadDate: string;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [iframeConfig, setIframeConfig] = useState({
    width: 600,
    height: 400,
    autoPlay: false,
    showTitles: true
  });
  const [showIframeCode, setShowIframeCode] = useState(false);

  // Mock data - replace with actual API call to Vercel backend
  useEffect(() => {
    const mockPhotos: Photo[] = [
      {
        id: '1',
        url: 'https://via.placeholder.com/400x300/333/fff?text=Station+Setup',
        title: 'My Ham Radio Station',
        description: 'Main operating position with Yaesu FT-991A',
        tags: ['station', 'equipment'],
        uploadDate: '2024-01-15'
      },
      {
        id: '2',
        url: 'https://via.placeholder.com/400x300/333/fff?text=Antenna+Farm',
        title: 'Antenna Farm',
        description: 'Yagi antennas for VHF/UHF operations',
        tags: ['antenna', 'vhf', 'uhf'],
        uploadDate: '2024-01-20'
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/400x300/333/fff?text=QSL+Cards',
        title: 'QSL Card Collection',
        description: 'Some of my favorite QSL cards',
        tags: ['qsl', 'collection'],
        uploadDate: '2024-02-01'
      },
      {
        id: '4',
        url: 'https://via.placeholder.com/400x300/333/fff?text=Field+Day',
        title: 'Field Day 2024',
        description: 'Operating portable during ARRL Field Day',
        tags: ['fieldday', 'portable'],
        uploadDate: '2024-06-25'
      },
      {
        id: '5',
        url: 'https://via.placeholder.com/400x300/333/fff?text=Tower+Work',
        title: 'Tower Maintenance',
        description: 'Installing new rotator for HF beam',
        tags: ['tower', 'maintenance'],
        uploadDate: '2024-03-10'
      },
      {
        id: '6',
        url: 'https://via.placeholder.com/400x300/333/fff?text=Contest+Setup',
        title: 'Contest Station',
        description: 'Ready for CQ WW DX Contest',
        tags: ['contest', 'dx'],
        uploadDate: '2024-10-15'
      }
    ];

    // Simulate API call delay
    setTimeout(() => {
      setPhotos(mockPhotos);
      setLoading(false);
    }, 1000);
  }, []);

  const togglePhotoSelection = (photoId: string) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const generateIframeCode = () => {
    const selectedPhotoUrls = photos
      .filter(photo => selectedPhotos.includes(photo.id))
      .map(photo => photo.url);

    if (selectedPhotoUrls.length === 0) {
      return '<!-- No photos selected -->';
    }

    // This would be your actual domain
    const baseUrl = 'https://your-domain.vercel.app';
    const photoParams = selectedPhotos.join(',');
    
    return `<iframe 
  src="${baseUrl}/iframe-viewer?photos=${photoParams}&width=${iframeConfig.width}&height=${iframeConfig.height}&autoplay=${iframeConfig.autoPlay}&titles=${iframeConfig.showTitles}"
  width="${iframeConfig.width}"
  height="${iframeConfig.height}"
  frameborder="0"
  scrolling="no"
  style="border: 1px solid #ccc; border-radius: 8px;">
</iframe>`;
  };

  if (loading) {
    return (
      <div className="gallery-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p className="gallery-subtitle">
            Browse ham radio photos and configure custom iframes for QRZ.com
          </p>
        </div>

        <div className="gallery-content">
          <div className="photos-section">
            <div className="section-header">
              <h2>Photo Collection</h2>
              <div className="photo-stats">
                {photos.length} photos • {selectedPhotos.length} selected
              </div>
            </div>

            <div className="photos-grid">
              {photos.map(photo => (
                <div 
                  key={photo.id}
                  className={`photo-card ${selectedPhotos.includes(photo.id) ? 'selected' : ''}`}
                  onClick={() => togglePhotoSelection(photo.id)}
                >
                  <div className="photo-image">
                    <img src={photo.url} alt={photo.title} />
                    <div className="photo-overlay">
                      <div className="selection-indicator">
                        {selectedPhotos.includes(photo.id) ? '✓' : '+'}
                      </div>
                    </div>
                  </div>
                  <div className="photo-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                    <div className="photo-tags">
                      {photo.tags?.map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="iframe-config-section">
            <div className="section-header">
              <h2>QRZ.com Iframe Configuration</h2>
              <p>Select photos above and configure your custom iframe</p>
            </div>

            <div className="config-panel">
              <div className="config-form">
                <div className="form-group">
                  <label>Width (px)</label>
                  <input
                    type="number"
                    value={iframeConfig.width}
                    onChange={(e) => setIframeConfig(prev => ({
                      ...prev,
                      width: parseInt(e.target.value) || 600
                    }))}
                    min="300"
                    max="1200"
                  />
                </div>

                <div className="form-group">
                  <label>Height (px)</label>
                  <input
                    type="number"
                    value={iframeConfig.height}
                    onChange={(e) => setIframeConfig(prev => ({
                      ...prev,
                      height: parseInt(e.target.value) || 400
                    }))}
                    min="200"
                    max="800"
                  />
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={iframeConfig.autoPlay}
                      onChange={(e) => setIframeConfig(prev => ({
                        ...prev,
                        autoPlay: e.target.checked
                      }))}
                    />
                    Auto-play slideshow
                  </label>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={iframeConfig.showTitles}
                      onChange={(e) => setIframeConfig(prev => ({
                        ...prev,
                        showTitles: e.target.checked
                      }))}
                    />
                    Show photo titles
                  </label>
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={() => setShowIframeCode(true)}
                  disabled={selectedPhotos.length === 0}
                >
                  Generate Iframe Code
                </button>
              </div>

              {showIframeCode && (
                <div className="iframe-code">
                  <h3>Copy this code to your QRZ.com page:</h3>
                  <textarea
                    value={generateIframeCode()}
                    readOnly
                    className="code-textarea"
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  />
                  <div className="code-actions">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        navigator.clipboard.writeText(generateIframeCode());
                        // You might want to show a toast notification here
                      }}
                    >
                      Copy to Clipboard
                    </button>
                    <a 
                      href={`https://your-domain.vercel.app/iframe-viewer?photos=${selectedPhotos.join(',')}&width=${iframeConfig.width}&height=${iframeConfig.height}&autoplay=${iframeConfig.autoPlay}&titles=${iframeConfig.showTitles}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Preview Iframe
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
