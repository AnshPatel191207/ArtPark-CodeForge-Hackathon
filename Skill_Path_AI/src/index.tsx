import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { landing } from './pages/landing'
import { upload } from './pages/upload'
import { dashboard } from './pages/dashboard'
import { aiChat } from './pages/ai-chat'
import { careerInsights } from './pages/career-insights'
import { courseSubscription } from './pages/course-subscription'
import { skillAnalytics } from './pages/skill-analytics'
import { adminPanel } from './pages/admin-panel'
import { profileSettings } from './pages/profile-settings'
import { roadmap } from './pages/roadmap'
import { login } from './pages/login'
import { signup } from './pages/signup'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))
