export default eventHandler(async (event) => {
  const { supabase } = event.context;
  const query = getQuery(event);

  const { data } = await supabase
    .from("serwery")
    .select()
    .eq("ip", `${query.ip}`);

  return data[0];
});
