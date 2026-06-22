export function formatBody(text: string): string {
  return text
    .replace(/(https?:\/\/[^\s<"]+)/g, '<a href="$1" target="_blank" rel="noopener" style="color:#a855f7;text-decoration:underline">$1</a>')
    .replace(/\*\*([\w.-]+\.[a-z]{2,}(?:\/[^\s*]*)?)\*\*/g, '<a href="https://$1" target="_blank" rel="noopener" style="color:#a855f7;font-weight:600;text-decoration:underline">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e5e7eb">$1</strong>')
    .replace(/`(.*?)`/g, '<code style="background:#1e1e30;padding:2px 6px;border-radius:4px;font-size:12px;color:#a78bfa">$1</code>')
}
