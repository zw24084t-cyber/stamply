const liffId = "2010557922-mgx06sya";

async function main(){

    await liff.init({
        liffId:liffId
    });

    if(!liff.isLoggedIn()){
        document.getElementById("loginBtn").style.display="inline";
        return;
    }

    document.getElementById("loginBtn").style.display="none";

    const profile = await liff.getProfile();

    document.getElementById("name").innerHTML = profile.displayName;
    document.getElementById("userId").innerHTML = profile.userId;
    document.getElementById("icon").src = profile.pictureUrl;

}

document.getElementById("loginBtn").addEventListener("click",()=>{
    liff.login();
});

main();