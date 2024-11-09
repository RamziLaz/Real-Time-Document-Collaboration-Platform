import { useDocStore } from "../state/useDocStore";

export function CursorIndicator() {
  const { users } = useDocStore();
  return (
    <div className="fixed bottom-4 left-4 flex space-x-2">
      {users.map((user) => (
        <div key={user.id} className="cursor-indicator bg-blue-500 text-white rounded-full p-2">
          {user.name}
        </div>
      ))}
    </div>
  );
}
