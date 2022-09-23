/* ********************************************************** */
// Projects Details Data Object
/* ********************************************************** */

let projectDetails = [
  {
    id: 1,
    name: "GDSC CMU Website",
    repo: "gdsc-cmu/gdsc-cmu",
    desc: "Official Website for GDSC CMU, and which is open source 🤩.",

    viewLink: "https://gdsc-cmu.github.io/",
    repoLink: "https://github.com/gdsc-cmu/gdsc-cmu.github.io",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 2,
    name: "Image Editor",
    repo: "gdsc-cmu/Image-Editor",
    desc: "Open Source Web based Image Editor.",

    viewLink: "https://gdsc-cmu.github.io/Image-Editor",
    repoLink: "https://github.com/gdsc-cmu/Image-Editor",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 3,
    name: "ML Gallery",
    repo: "gdsc-cmu/ML-Gallery",
    desc:
      "A Special Open-Source Repository for all kinds of Data Science and Machine Learning Projects! Contribute your EDA Case Studies, ML Models, Deep Learning Algo, and fun Computer Vision ideas!",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdsc-cmu/ML-Gallery",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 4,
    name: "Pictionary",
    repo: "gdsc-cmu/Pictionary",
    desc: "Ever heard about a Picture based Dictionary? , it's here!",

    viewLink: "https://gdsc-cmu.github.io/Pictionary",
    repoLink: "https://github.com/gdsc-cmu/Pictionary",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 5,
    name: "UpTrend",
    repo: "gdsc-cmu/UpTrend",
    desc: "One place destination to check trending data across websites.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdsc-cmu/UpTrend",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 6,
    name: "GuruCool",
    repo: "gdsc-cmu/GuruCool",
    desc: "Productivity Solution for Educators and Students.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdsc-cmu/GuruCool",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 7,
    name: "Rhythm-Finder",
    repo: "gdsc-cmu/Rhythm-Finder",
    desc: "ML-powered Music Recommendation Engine.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdsc-cmu/Rhythm-Finder",

    viewtarget: "_self",
    repotarget: "_blank",
  },
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectDiv = document.querySelector(".projects_contents");

Object.values(projectDetails).map((val) => {
  projectDiv.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="project_card">
            <h2>${val.name}</h2>
            <a href="${val.repoLink}" class="repo">${val.repo}</a>
            <p>${val.desc}</p>
            <div class="links">
                <a href="${val.viewLink}" target="${val.viewtarget}">Preview</a>
                <a href="${val.repoLink}" target="${val.repotarget}">Repository</a>
            </div>
        </div>
    `;
});
