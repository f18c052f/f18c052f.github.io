export interface Achievement {
    type: string;
    title: string;
    date: string;
    site: string;
    url: string;
    description: string;
}

export const achievements: Achievement[] = [
    {
      type: "Journal (Peer-reviewed)",
      title: "Vibration distribution measurement using down sampling phase shifting interferometer",
      date: "Mar. 2020",
      site: "Optical Engineering, 59(3), 034112",
      url: "https://www.spiedigitallibrary.org/journals/optical-engineering/volume-59/issue-3/034112/Vibration-distribution-measurement-using-downsampling-phase-shifting-interferometer/10.1117/1.OE.59.3.034112.short?SSO=1",
      description: "First author"
    },
    {
      type: "International Conference",
      title: "Vibration distribution measurement using down sampling phase shifting interferometer",
      date: "Sep. 2019",
      site: "ISMTII(International Symposium on Measurement Technology and Intelligent Instruments)2019",
      url: "http://www.ismtii2019.jp/",
      description: "Oral Presentation"
    }
];