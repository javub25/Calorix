import {Footer} from "@/layouts/Footer"
import { Router } from "@/router/Router"
import { ActivityProvider } from '@/contexts/Activity-context.tsx'

function App() {
  return  (
    <main>
        <ActivityProvider>
            <Router />
        </ActivityProvider>
      <Footer />
    </main>
  )
}

export default App
