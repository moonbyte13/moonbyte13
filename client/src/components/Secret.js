import React from 'react';

export default function LandingPage() {
  const style = {
    'width': '530px',
    'min-height': '700px',
    'border': 'none',
    'border-radius': '20px',
    'overflow': 'hidden',
  }
  return (
    <div className="flex justify-center m-10">
      <iframe src="https://funhtml5games.com?embed=2048bit" style={style} frameborder="0" title='2048'></iframe>
    </div>
  );
}
