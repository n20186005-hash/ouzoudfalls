export default {
 /** @param {Request} request @param {{ASSETS:{fetch:(request:Request)=>Promise<Response>}}} env */
 async fetch(request,env){
  const url=new URL(request.url);
  if(['ouzoudfalls.com','www.ouzoudfalls.com'].includes(url.hostname)&&(url.protocol!=='https:'||url.hostname!=='ouzoudfalls.com')){url.protocol='https:';url.hostname='ouzoudfalls.com';url.port='';return Response.redirect(url.toString(),301);}
  const explicit=/^\/404(?:\.html|\/)?$/.test(url.pathname);
  const result=await env.ASSETS.fetch(explicit?new Request(new URL('/__ouzoud_error_document__',url),request):request);
  if(result.status===404||explicit){const headers=new Headers(result.headers);headers.set('X-Robots-Tag','noindex, follow');headers.delete('Location');return new Response(result.body,{status:404,headers});}
  return result;
 }
};
