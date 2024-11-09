import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DocumentEditor } from "../../component/DocumentEditor";
import { CursorIndicator } from "../../component/CursorIndicator";
import { supabase } from "../../lib/supabaseClient";

export default function DocumentPage() {
  const router = useRouter();
  const { docId } = router.query;
  const [documentContent, setDocumentContent] = useState("");

  useEffect(() => {
    const fetchDocument = async () => {
      if (docId) {
        const { data, error } = await supabase
          .from("documents")
          .select("content")
          .eq("id", docId)
          .single();

        if (data) {
          setDocumentContent(data.content);
        } else if (error) {
          console.error("Error fetching document:", error);
        }
      }
    };
    fetchDocument();
  }, [docId]);

  if (!docId) return null;

  return (
    <div className="p-4">
      <DocumentEditor initialContent={documentContent} docId={docId as string} />
      <CursorIndicator />
    </div>
  );
}
