
## Getting Started

The project requires certain environment variables for connecting to Supabase and Liveblocks. These should be set in a .env

NEXT_PUBLIC_SUPABASE_URL=<Your Supabase project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Your Supabase anon key>
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<Your Liveblocks public key>


components:

CursorIndicator.tsx: Displays a cursor for each user editing a document in real-time.
DocumentEditor.tsx: The main collaborative editor component.


hooks: Custom React hooks for encapsulating reusable logic.
useSupabaseAuth.ts: Manages authentication logic using Supabase.


lib: Contains setup files for external libraries.
liveblocks.ts: Configures the Liveblocks client for real-time functionality.
supabaseClient.ts: Configures the Supabase client to manage database and authentication.


state: Manages application state using Zustand.
useDocStore.ts: Zustand store to handle document-related state, such as the current document being edited.