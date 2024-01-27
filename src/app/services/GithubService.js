

const username = "ahmetyavuzm";
const URL = `https://api.github.com/users/${username}`;
const token = "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";

const headers =  {
    Authorization: `Bearer ${token}`
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
    const decodedContent = atob(base64Content, config["encoding"]);

    return JSON.parse(decodedContent);
}


const getProjects = async () => {
    const projects = [];
    const repos = await getRepos();
    for (const repo in repos) {
        const config = await getRepoWebsiteConfig(repos[repo]);

        if(config === null){
            continue;
        }

        const imageURL = await getRepoCoverImageURL(repos[repo]);
        
        config["imageURL"] = imageURL;
        config["repoURL"] = repos[repo]["html_url"];
        config["repoName"] = repos[repo]["name"];
        config["id"] = repos[repo]["id"];
        
        projects.push(config);
    }

    return projects;
}

export default{
    getProjects,
}