/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// Lead Member Details
let leadMemberDetails = [
  {
    id: 1,
    name: "Anusheh Mustafeez",
    avatar: "../assets/img/team/anusheh_mustafeez.webp",
    badges: `
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
];

// Core Members Details
let coreMemberDetails = [
  {
    id: 1,
    name: "Divya Raj",
    avatar: "../assets/img/team/divya_raj.webp",
    badges: `
                    <span class="blue">Tech</span>
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "yellow",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
  {
    id: 2,
    name: "Raga C.",
    avatar: "../assets/img/team/ragashree_mysuru_chandrashekar_cCAAX4z.webp",
    badges: `
                    <span class="red">Organizing</span>
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "blue",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
  {
    id: 3,
    name: "Shruti Nayar",
    avatar: "../assets/img/team/shruti_nair.webp",
    badges: `
                    <span class="yellow">Finance</span>
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
  {
    id: 4,
    name: "Amy Jung",
    avatar: "../assets/img/team/amy.jpeg",
    badges: `
                    <span class="red">Partnerships</span>
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "blue",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
  {
    id: 5,
    name: "Anya Bindra",
    avatar: "../assets/img/team/anya_bindra.jpeg",
    badges: `
                    <span class="red">Marketing</span>
                    <span class="green">Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
  {
    id: 6,
    name: "Harsha Nikhar",
    avatar: "../assets/img/team/harsha_nikhar.webp",
    badges: `
                    <span class="red">Marketing</span>
                `,
    cardBorderColor: "green",

    socialGithubLink: "#",
    socialLinkedinLink: "#",
    socialTwitterLink: "#",
  },
];

// Ex Core Members Details
let excoreMemberDetails = [];

/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */

let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");
let excoreMember = document.querySelector("#exCore");

// Lead Member
Object.values(leadMemberDetails).map((val) => {
  leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4 class="lg">${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Core Members
Object.values(coreMemberDetails).map((val) => {
  coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Ex Core Members
Object.values(excoreMemberDetails).map((val) => {
  excoreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
