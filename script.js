"use strict";
const form = document.querySelector("#repos-form");
const button = document.querySelector("#get-repos");
const result = document.querySelector("#repos-list");
const nameRepos = document.querySelector("#github-username");
const getRepos = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${nameRepos.value}/repos`)
            .then((response) => response.json())
            .then((datas) =>
                datas.forEach((data) => {
                    result.insertAdjacentHTML(
                        "beforeend",
                        `<li>${data.full_name}</li>`,
                    );
                }),
            );
    });
};

getRepos();
