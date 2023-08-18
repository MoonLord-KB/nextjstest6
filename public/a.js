let renode=document.querySelector("meta[name='re:url']");
if(renode){
    let reurl=renode.content;
    if(reurl){
        location.href=reurl;
    }
}