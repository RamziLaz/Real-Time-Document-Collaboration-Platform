import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Button } from "@shadcn/ui";
import Link from "next/link";

export default function DocumentsIndex() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data } = await supabase.from("documents").select("id, created_at");
      setDocuments(data);
    };
    fetchDocuments();
  }, []);

  const createDocument = async () => {
    const { data, error } = await supabase
      .from("documents")
      .insert([{ content: "", owner_id: (await supabase.auth.getUser()).data?.user?.id }])
      .single();

    if (data) {
      setDocuments([...documents, data]);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Documents</h1>
      <Button onClick={createDocument}>New Document</Button>
      <ul className="mt-4 space-y-2">
        {documents.map((doc) => (
          <li key={doc.id}>
            <Link href={`/docs/${doc.id}`} className="text-blue-500">
              Document ID: {doc.id} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
