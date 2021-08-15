
const puppy=require("puppeteer");
const id="satix49281@bsmitao.com"
const pass="deepanshu1234@"
const playlist=process.argv[2];
async function main(){
    const browser=await puppy.launch({
        headless:false,
        defaultViewport:false,
        args: ['--start-fullscreen', '--disable-notifications', '--incognito']
    });
    let tabs=await browser.pages();
    let tab=tabs[0];
    await tab.goto("https://open.spotify.com/");
    await tab.waitForSelector("._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss",{visible:true});
    await tab.click("._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss");
    await tab.waitForSelector("#login-username",{visible:true});
    await tab.type("#login-username",id);
    await tab.waitForSelector("#login-password",{visible:true});
    await tab.type("#login-password",pass);
    await tab.waitForSelector("#login-button",{visible:true});
    await tab.click("#login-button");
    await tab.waitForSelector(".icon.search-icon",{visible:true});
    await tab.click(".icon.search-icon");
    await tab.waitForSelector("._748c0c69da51ad6d4fc04c047806cd4d-scss.f3fc214b257ae2f1d43d4c594a94497f-scss",{visible:true});
    await tab.type("._748c0c69da51ad6d4fc04c047806cd4d-scss.f3fc214b257ae2f1d43d4c594a94497f-scss",playlist);
    await tab.waitForSelector("._85fec37a645444db871abd5d31db7315-scss",{visible:true});
    await tab.click("._85fec37a645444db871abd5d31db7315-scss");
    await tab.waitForSelector(".da0bc4060bb1bdb4abb8e402916af32e-scss.standalone-ellipsis-one-line._8a9c5cc886805907de5073b8ebc3acd8-scss",{visible:true});
    let elements=await tab.$$(".da0bc4060bb1bdb4abb8e402916af32e-scss.standalone-ellipsis-one-line._8a9c5cc886805907de5073b8ebc3acd8-scss");
    let songsname=[];
    for (let i = 0; i < elements.length; i++) {
        const text = await (await elements[i].getProperty('innerText')).jsonValue();
        // console.log(text);
        songsname.push(text);
      }
    await tab.click(".a16324b4c3b900fe7e7c087e3f2a9e11-scss");
    for(let i=0;i<songsname.length;i++){
      await tab.waitForSelector("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");
      await tab.type("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss",songsname[i]);
      await tab.waitForTimeout(1000);
      let addbutton=await tab.$$(".b490086127ec0ecdc7b170c03de9c5b1-scss")
      await addbutton[0].click();
    await tab.waitForSelector(".e2743454bbd40e4ecd04d30f09d53798-scss");
    await tab.click(".e2743454bbd40e4ecd04d30f09d53798-scss");
    await tab.waitForTimeout(1000);
    }
    await browser.close();



}

main();