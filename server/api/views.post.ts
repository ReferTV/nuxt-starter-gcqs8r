export default eventHandler(async (event) => {
  const { supabase } = event.context;
  const query = getQuery(event);
  const { error } = await supabase.rpc("increment_views", { adres: query.ip });
  return error;
});
