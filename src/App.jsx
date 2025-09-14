import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import { fetchProfile } from './services/api'

function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchProfile()
        setProfile(profileData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  if (loading) return <div className="container text-center mt-5">Loading...</div>
  if (error) return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">API Error</h4>
        <p>Unable to connect to the API server. Please check that the backend is running.</p>
        <hr />
        <p className="mb-0">Error details: {error}</p>
      </div>
    </div>
  )

  return <Profile profile={profile} />
}

export default App
