export default defineEventHandler(async (event) => {
  event.context.supabase = event;
});
