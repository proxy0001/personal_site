export const seriesInTheRoom = {
    title: "In the Room",
    description: "In the Room Description In the Room Description In the Room Description In the Room DescriptionIn the Room Description In the Room Description In the Room Description In the Room DescriptionIn the Room Description In the Room Description In the Room Description In the Room DescriptionIn the Room Description In the Room Description In the Room Description In the Room DescriptionIn the Room Description In the Room Description In the Room Description In the Room Description",
    pieces: [
      {
        title: "Play on the Swing",
        src: "/img/in_the_room/In_the_Room-Play_on_the_Swing_1080P.jpg",
        alt: "In the Room - Play on the Swing",
        createDate: "2022-06-28",
      },
      {
        title: "Project Me",
        src: "/img/in_the_room/In_the_Room-Project_Me_1080P.jpg",
        alt: "In the Room - Project Me",
        createDate: "2022-06-24",
      },
      {
        title: "Want out",
        src: "/img/in_the_room/In_the_Room-Want_out_1080P.jpg",
        alt: "In the Room - Want out",
        createDate: "2022-06-23",
      },
      {
        title: "Looks Like I Have a Son",
        src: "/img/in_the_room/In_the_Room-Looks_Like_I_Have_a_Son_1080P.jpg",
        alt: "In the Room - Looks Like I Have a Son",
        createDate: "2022-06-18",
      },
      {
        title: "Swimming ?",
        src: "/img/in_the_room/In_the_Room-Swimming_1080P.jpg",
        alt: "In the Room - Swimming ?",
        createDate: "2022-06-15",
      },
      {
        title: "Dancing with Room",
        src: "/img/in_the_room/In_the_Room-Dancing_with_Room_1080P.jpg",
        alt: "In the Room - Dancing with Rooms",
        createDate: "2022-06-14",
      },
      {
        title: "Watching TV",
        src: "/img/in_the_room/In_the_Room-Watching_TV_1080P.jpg",
        alt: "In the Room - Watching TV",
        createDate: "2022-06-11",
      },
      {
        title: "Blowing Bubbles",
        src: "/img/in_the_room/In_the_Room-Blowing_Bubbles_1080P.jpg",
        alt: "In the Room - Blowing Bubbles",
        createDate: "2022-06-07",
      },
      {
        title: "Me",
        src: "/img/in_the_room/In_the_Room-Me_1080P.jpg",
        alt: "In the Room - Me",
        createDate: "2022-05-19",
      },
    ],
    representColor: "greenyellow",
}
export const seriesCanITakeAPhotoForYou = {
    title: "Can I Take a Photo for You ?",
    description: "Can I Take a Photo for You ? description",
    pieces: [
      {
        title: "20220627",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220627_153601251.jpg",
        alt: "Can I Take a Photo for You ? - 20220627",
        createDate: "2022-06-27",
      },
      {
        title: "20220626",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220626_163721632.jpg",
        alt: "Can I Take a Photo for You ? - 20220626",
        createDate: "2022-06-26",
      },
      {
        title: "20220624",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220624_093253742.jpg",
        alt: "Can I Take a Photo for You ? - 20220624",
        createDate: "2022-06-24",
      },
      {
        title: "20220623",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220623_075105607.jpg",
        alt: "Can I Take a Photo for You ? - 20220623",
        createDate: "2022-06-23",
      },
      {
        title: "20220622",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220622_074847108.jpg",
        alt: "Can I Take a Photo for You ? - 20220622",
        createDate: "2022-06-22",
      },
      {
        title: "20220610",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220610_153057415.jpg",
        alt: "Can I Take a Photo for You ? - 20220610",
        createDate: "2022-06-10",
      },
      {
        title: "20220609",
        src: "/img/can_i_take_a_photo_for_you/PXL_20220609_124848041.jpg",
        alt: "Can I Take a Photo for You ? - 20220609",
        createDate: "2022-06-09",
      },
    ],
    representColor: "cornsilk",
}

export const allSeries = [
    seriesInTheRoom,
    seriesCanITakeAPhotoForYou,
].map((x, i) => {
    return {
        title: x.title,
        description: x.description,
        cover: x.pieces[0],
        representColor: x.representColor,
    }
})

export const menuOptions = [
    {text: "Home", link: "/"},
    {text: seriesInTheRoom.title, link: "/series/in-the-room", representColor: seriesInTheRoom.representColor},
    {text: seriesCanITakeAPhotoForYou.title, link: "/series/can-i-take-a-photo-for-you", representColor: seriesCanITakeAPhotoForYou.representColor},
]