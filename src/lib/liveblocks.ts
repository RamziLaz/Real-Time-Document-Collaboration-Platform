// src/lib/liveblocksClient.ts
import { createClient } from "@liveblocks/client";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_API_KEY!,
});

export default client;
