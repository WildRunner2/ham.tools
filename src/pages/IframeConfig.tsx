import React, { useState, useEffect } from 'react';
import './IframeConfig.css';

interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
}

const IframeConfig: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [config, setConfig] = useState({
    width: 600,
    height: 400,
    autoPlay: true,
    interval: 5000,
    showTitles: true,
    showControls: true,
    borderRadius: 8,
    backgroundColor: '#1e1e1e'
  });
  const [savedConfigs, setSavedConfigs] = useState<any[]>([]);

  // Check if user is logged in (this would be actual auth check)
  useEffect(() => {
    // TODO: Implement actual auth check
    setIsLoggedIn(false); // For demo purposes
  }, []);

  // Mock photos data
  useEffect(() => {
    const mockPhotos: Photo[] = [
      {
        id: '1',
        url: 'https://via.placeholder.com/300x200/333/fff?text=Station',
        title: 'My Ham Radio Station',
        description: 'Main operating position'
      },
      {
        id: '2',
        url: 'https://via.placeholder.com/300x200/333/fff?text=Antenna',
        title: 'Antenna Farm',
        description: 'VHF/UHF antennas'
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/300x200/333/fff?text=QSL',
        title: 'QSL Cards',
        description: 'Collection highlights'
      }
    ];
    setPhotos(mockPhotos);
  }, []);

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const togglePhotoSelection = (photoId: string) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const generateIframeCode = () => {
    if (selectedPhotos.length === 0) return '';

    const baseUrl = 'https://your-domain.vercel.app';
    const params = new URLSearchParams();
    params.append('photos', selectedPhotos.join(','));
    params.append('width', config.width.toString());
    params.append('height', config.height.toString());
    params.append('autoPlay', config.autoPlay.toString());
    params.append('interval', config.interval.toString());
    params.append('showTitles', config.showTitles.toString());
    params.append('showControls', config.showControls.toString());
    params.append('borderRadius', config.borderRadius.toString());
    params.append('backgroundColor', config.backgroundColor);

    return `<iframe 
  src="${baseUrl}/iframe-viewer?${params.toString()}"
  width="${config.width}"
  height="${config.height}"
  frameborder="0"
  scrolling="no"
  style="border-radius: ${config.borderRadius}px;">
</iframe>`;
  };

  const saveConfiguration = () => {
    const newConfig = {
      id: Date.now().toString(),
      name: `Config ${savedConfigs.length + 1}`,
      photos: selectedPhotos,
      settings: config,
      createdAt: new Date().toISOString()
    };
    setSavedConfigs(prev => [...prev, newConfig]);
    alert('Configuration saved!');
  };

  if (!isLoggedIn) {
    return (
      <div className="iframe-config">
        <div className="container">
          <div className="login-required">
            <div className="login-card">
              <h1>🔒 Login Required</h1>
              <p>
                You need to be logged in to access the iframe configuration tool.
                This feature allows you to create custom photo galleries for your QRZ.com profile.
              </p>
              <div className="features-list">
                <h3>What you can do with iframe configuration:</h3>
                <ul>
                  <li>✓ Select multiple photos for your gallery</li>
                  <li>✓ Customize slideshow settings</li>
                  <li>✓ Set custom dimensions and styling</li>
                  <li>✓ Save multiple configurations</li>
                  <li>✓ Generate QRZ.com-ready iframe code</li>
                </ul>
              </div>
              <div className="login-actions">
                <a href="/login" className="btn btn-primary">
                  Sign In
                </a>
                <a href="/register" className="btn btn-outline">
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="iframe-config">
      <div className="container">
        <div className="config-header">
          <h1>Iframe Configuration</h1>
          <p>Create custom photo galleries for your QRZ.com profile</p>
        </div>

        <div className="config-layout">
          <div className="config-sidebar">
            <div className="config-section">
              <h3>Display Settings</h3>
              
              <div className="form-group">
                <label>Width (px)</label>
                <input
                  type="number"
                  value={config.width}
                  onChange={(e) => handleConfigChange('width', parseInt(e.target.value))}
                  min="300"
                  max="1200"
                />
              </div>

              <div className="form-group">
                <label>Height (px)</label>
                <input
                  type="number"
                  value={config.height}
                  onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                  min="200"
                  max="800"
                />
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={config.autoPlay}
                    onChange={(e) => handleConfigChange('autoPlay', e.target.checked)}
                  />
                  Auto-play slideshow
                </label>
              </div>

              {config.autoPlay && (
                <div className="form-group">
                  <label>Slide Interval (ms)</label>
                  <input
                    type="number"
                    value={config.interval}
                    onChange={(e) => handleConfigChange('interval', parseInt(e.target.value))}
                    min="1000"
                    max="10000"
                    step="500"
                  />
                </div>
              )}

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={config.showTitles}
                    onChange={(e) => handleConfigChange('showTitles', e.target.checked)}
                  />
                  Show photo titles
                </label>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={config.showControls}
                    onChange={(e) => handleConfigChange('showControls', e.target.checked)}
                  />
                  Show navigation controls
                </label>
              </div>

              <div className="form-group">
                <label>Border Radius (px)</label>
                <input
                  type="number"
                  value={config.borderRadius}
                  onChange={(e) => handleConfigChange('borderRadius', parseInt(e.target.value))}
                  min="0"
                  max="20"
                />
              </div>
            </div>

            <div className="config-actions">
              <button 
                className="btn btn-primary"
                onClick={saveConfiguration}
                disabled={selectedPhotos.length === 0}
              >
                Save Configuration
              </button>
            </div>
          </div>

          <div className="config-main">
            <div className="photos-section">
              <h3>Select Photos ({selectedPhotos.length} selected)</h3>
              <div className="photos-grid">
                {photos.map(photo => (
                  <div 
                    key={photo.id}
                    className={`photo-card ${selectedPhotos.includes(photo.id) ? 'selected' : ''}`}
                    onClick={() => togglePhotoSelection(photo.id)}
                  >
                    <img src={photo.url} alt={photo.title} />
                    <div className="photo-overlay">
                      <span className="selection-indicator">
                        {selectedPhotos.includes(photo.id) ? '✓' : '+'}
                      </span>
                    </div>
                    <div className="photo-info">
                      <h4>{photo.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedPhotos.length > 0 && (
              <div className="iframe-preview">
                <h3>Generated Iframe Code</h3>
                <textarea
                  value={generateIframeCode()}
                  readOnly
                  className="code-textarea"
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
                <div className="preview-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigator.clipboard.writeText(generateIframeCode())}
                  >
                    Copy Code
                  </button>
                  <button className="btn btn-outline">
                    Preview
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {savedConfigs.length > 0 && (
          <div className="saved-configs">
            <h3>Saved Configurations</h3>
            <div className="configs-grid">
              {savedConfigs.map(config => (
                <div key={config.id} className="config-card">
                  <h4>{config.name}</h4>
                  <p>{config.photos.length} photos</p>
                  <p>Created: {new Date(config.createdAt).toLocaleDateString()}</p>
                  <div className="config-actions">
                    <button className="btn btn-sm btn-outline">Load</button>
                    <button className="btn btn-sm btn-secondary">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IframeConfig;
