export interface AuditResponse {
  id: string | null;
  application_id: string | null;
  created_at: string | null;
  old: string | null;
  new: string | null;
  event: string | null;
  resource: string | null;
}
