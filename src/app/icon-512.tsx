import { ImageResponse } from 'next/og'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 280,
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '80px',
          fontWeight: 'bold',
        }}
      >
        ₿
      </div>
    ),
    {
      ...size,
    }
  )
}
