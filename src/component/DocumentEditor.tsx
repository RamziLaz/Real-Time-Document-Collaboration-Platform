import { useDocStore } from "../state/useDocStore";
import { useState, useEffect } from 'react';
import { liveblocks } from "../lib/liveblocks";
import { supabase } from '../lib/supabaseClient';
import { Textarea } from "@shadcn/ui";

export function DocumentEditor({ initialContent, docId }) {
  const { document, setDocument } = useDocStore();
  const [text, setText] = useState(initialContent);

  useEffect(() => {
    const fetchDocContent = async () => {
      const { data } = await supabase.from('documents').select('content').eq('id', docId).single();
      if (data) setText(data.content);
    };
    fetchDocContent();
  }, [docId]);

  const handleTextChange = async (e) => {
    const updatedContent = e.target.value;
    setText(updatedContent);
    setDocument(updatedContent);

    await supabase.from('documents').update({ content: updatedContent }).eq('id', docId);
  };

  return (
    <Textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Edit document here..."
      className="w-full h-screen p-4"
    />
  );
}
