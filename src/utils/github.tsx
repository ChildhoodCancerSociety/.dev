import config from "@/config";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: config.githubToken });

export const getOrgs = () => octokit.request('GET /organizations', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

export const getRepos = () => octokit.request('GET /orgs/{org}/repos', {
  org: "ChildhoodCancerSociety",
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

export const getMembers = () => octokit.request('GET /orgs/{org}/members', {
  org: "ChildhoodCancerSociety",
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});