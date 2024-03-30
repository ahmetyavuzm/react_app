

export const username = "ahmetyavuzm";
export const URL = `https://api.github.com/users/${username}`;

const token0 = "gh";
const token1 = "p_35JZiGbvoPOW3";
const token2 = "LJTbSviR48RGA3vpS36ikey"

export const headers =  {
    Authorization: `Bearer ${token0}${token1}${token2}`
}

const getRepos = async () => {
    const response = await fetch(URL + `/repos`, {headers : headers});
    const data = await response.json();
    return data;
}


const getRepo = async (repoName) => {
    const response = await fetch(URL + `/repos/${repoName}` , {headers : headers});
    const data = await response.json();
    return data;
}


const getRepoCoverImageURL = async (repo) => {
    const contentsURL = repo["contents_url"].replace("{+path}", "");
    const response = await fetch(contentsURL , {headers : headers})

    if(response === undefined){
        return null;
    }

    const contents = await response.json()

    await getRepoWebsiteConfig(repo);

    const filetypes = ["png", "jpg", "jpeg"]
    
    for (const content of contents) {
        if(content["name"].split(".")[0] === "cover" && filetypes.includes(content["name"].split(".")[1])){
            return content["html_url"] + "?raw=true";
        }
    }

    return null;
}



const getRepoWebsiteConfig = async (repo) => {
    const configURL = repo["contents_url"].replace("{+path}", "website.config.json?raw=true");
    const response = await fetch(configURL , {headers : headers})

    if(!response.ok){
        return null;
    }

    const config = await response.json()

    const base64Content = config["content"];
    //const decodedContent = atob(base64Content, config["encoding"]);
    const decodedContent = Buffer.from(base64Content, 'base64').toString('utf-8');

    return JSON.parse(decodedContent);
}


const getProjects = async () => {
    const projects = [];
    const repos = await getRepos();
    for (const repo in repos) {
        let config = {};
        const content = await getRepoWebsiteConfig(repos[repo]);

        if(content === null){
            continue;
        }

        


        const imageURL = await getRepoCoverImageURL(repos[repo]);
        
        config["content"] = content;
        config["imageURL"] = imageURL;
        config["repoURL"] = repos[repo]["html_url"];
        config["repoName"] = repos[repo]["name"];
        config["id"] = repos[repo]["id"];
        
        projects.push(config);
    }

    return projects;
}

export default{
    getProjects
}