export default eventHandler(async (event) => {
  const { supabase } = event.context;
  const { data } = await supabase
    .from("serwery")
    .select()
    .order("votes", { ascending: false });
  return data;
});
