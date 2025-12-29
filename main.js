const courses = [
    {
        number: 1,
        title: "Baat cheet",
        category: "Baatcheet",
        videoUrl: "https://us06web.zoom.us/rec/share/sEUTOrtFkkjs49vDX8oiqdwDeFxvzHDn3gSMI9rN44SHKdoeLzR16ab3fjWAN2Y.gWcswNHv9gYAYczL?startTime=1761137372000"
    },
    {
        number: 2,
        title: "Quick Baatcheet (01 Nov)",
        category: "Baatcheet",
        videoUrl: "https://us06web.zoom.us/rec/share/jT0Yp7aVABG63oidE_txsFUZVq1niBmaC-__veE0PyoDSuz_64BpTpFGQV38lvyp.19dYcwngjx1MojsP?startTime=1762009439000"
    },
	{
	    number:3,
	    title: "Prepometer Announcement",
	    category: "Baatcheet",
	    videoUrl: 'https://us06web.zoom.us/rec/share/N-HlZLJYPNCWGlFhNEpbDh5lD6KuHx87D-_KlYFVBm1x2K_cEY0GhEo2sKeM8jPU.bpUGvdgsj8Ep9Ml8'
    },
    {
        number: 1,
        title: "Cell 1",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/BOyR0i3aXN2aJDghpoY093yyjCvbOvepZgq0a73ztwjnOjh6UuudR_Z3tvhqXwfn.HjxK8UrphgjIe6rH?startTime=1761229309000"
    },
    {
        number: 2,
        title: "Cell 2",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/eXkYAqBqUaEyYm8CP44O725lrPvwr49it43cgSgJgiI0YZjD2j7G9lCYmwzjRm-I.6HobQFtJF3Mbulnw?startTime=1761310698000"
    },
    {
        number: 3,
        title: "Plant Tissue",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/IEhS-rkNP49gE6p_h625ZThZkg5BURYQxzXrSHxoxBL8MSDDMgruD9LxPrchLbDC.8TX-pXK-uoFpIlAJ?startTime=1761742164000"
    },
    {
        number: 4,
        title: "Animal Tissue + PYQ",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/IEhS-rkNP49gE6p_h625ZThZkg5BURYQxzXrSHxoxBL8MSDDMgruD9LxPrchLbDC.8TX-pXK-uoFpIlAJ?startTime=1761746472000"
    },
    {
        number: 5,
        title: "Kidney + nutrition in plants",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/jT0Yp7aVABG63oidE_txsFUZVq1niBmaC-__veE0PyoDSuz_64BpTpFGQV38lvyp.19dYcwngjx1MojsP?startTime=1762001782000"
    },
    {
        number: 6,
        title: "Nutrition in animals + Blood",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/jT0Yp7aVABG63oidE_txsFUZVq1niBmaC-__veE0PyoDSuz_64BpTpFGQV38lvyp.19dYcwngjx1MojsP?startTime=1762005578000"
    },
    {
        number: 7,
        title: "Blood group + Heart",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/_mpK769QPVW0LMW6PgoA7ba1v0hxc4cb8ItcgnVRlxDc42Tf7_xVJSpiFXmi9twL._-hrwHTJazksXLJi?startTime=1762180398000"
    },
    {
        number: 8,
        title: "Bimariyo ki badi class",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/tqUkjxYCHG2reygjQHLex4S8iz4Z0ksHQji22PivevMTZp69yPcRzBCPJqbGxaEu.xhsN6QEZ65oMiNby?startTime=1762434294000"
    },
    {
        number: 9,
        title: "Animal hormones + plant hormone",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/F31jfzt3CP9pX4urNJ3F0adU_4z-EhyeMOr9jiGFVs9hUxAzK9P0RJXpm3GF9iF_.rHrymv7D15Bv460Q?startTime=1762865926000"
    },
    {
        number: 10,
        title: "Flower + Stem + Root",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/F31jfzt3CP9pX4urNJ3F0adU_4z-EhyeMOr9jiGFVs9hUxAzK9P0RJXpm3GF9iF_.rHrymv7D15Bv460Q?startTime=1762870483000"
    },
    {
        number: 11,
        title: "Ecological classification of plants",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/F31jfzt3CP9pX4urNJ3F0adU_4z-EhyeMOr9jiGFVs9hUxAzK9P0RJXpm3GF9iF_.rHrymv7D15Bv460Q?startTime=1762873509000"
    },
    {
        number: 12,
        title: "Reproduction",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/lCYttr9I6vCPQc-IHg7DKhP7PpDqMqZAPr9SYnzfMYguirJXZS_WfFsGYX6uFgV7.iiW1tsmn1WCM-Fum?startTime=1762952247000"
    },
    {
        number: 13,
        title: "Types of Chromosome + Nervous system",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/lCYttr9I6vCPQc-IHg7DKhP7PpDqMqZAPr9SYnzfMYguirJXZS_WfFsGYX6uFgV7.iiW1tsmn1WCM-Fum?startTime=1762956529000"
    },
    {
        number: 14,
        title: "Monera + protista + fungi + plantae",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/qJdlevR9O6nw6tWVxkdFhYXodmY4kBEQO9wxGC1fG6Ri52tWcsdLT5uoLbdso6wI.6G590sPIVMAb9A0u?startTime=1763038720000"
    },
    {
        number: 15,
        title: "PYQs + Animalia",
        category: "Biology",
        videoUrl: "https://us06web.zoom.us/rec/share/qJdlevR9O6nw6tWVxkdFhYXodmY4kBEQO9wxGC1fG6Ri52tWcsdLT5uoLbdso6wI.6G590sPIVMAb9A0u?startTime=1763042745000"
    },
    {
        number: 1,
        title: "Tense Class 1",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/sEUTOrtFkkjs49vDX8oiqdwDeFxvzHDn3gSMI9rN44SHKdoeLzR16ab3fjWAN2Y.gWcswNHv9gYAYczL?startTime=1761140218000"
    },
    {
        number: 2,
        title: "Tense Samapt",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/BOyR0i3aXN2aJDghpoY093yyjCvbOvepZgq0a73ztwjnOjh6UuudR_Z3tvhqXwfn.HjxK8UrphgjIe6rH?startTime=1761224332000"
    },
    {
        number: 3,
        title: "Parts of speech Basic",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/eXkYAqBqUaEyYm8CP44O725lrPvwr49it43cgSgJgiI0YZjD2j7G9lCYmwzjRm-I.6HobQFtJF3Mbulnw?startTime=1761316330000"
    },
    {
        number: 4,
        title: "POS Final",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/1rCrDsxnro335BI4CxZdCtdnB2SwEiokEdL3wG2AFr8jDUkf3lA8FQhvqQlSpbIN.Lx9XekHn1OwxAc6R?startTime=1761656143000"
    },
    {
        number: 5,
        title: "New pattern POS",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/1rCrDsxnro335BI4CxZdCtdnB2SwEiokEdL3wG2AFr8jDUkf3lA8FQhvqQlSpbIN.Lx9XekHn1OwxAc6R?startTime=1761661190000"
    },
    {
        number: 6,
        title: "Verb 1",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/_mpK769QPVW0LMW6PgoA7ba1v0hxc4cb8ItcgnVRlxDc42Tf7_xVJSpiFXmi9twL._-hrwHTJazksXLJi?startTime=1762174157000"
    },
    {
        number: 7,
        title: "Verb 2",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/5Q8eVxxZOwcjHKphlXaK_eU6gAgcmZgKoe2TUUmR7YPLpysqGYY_7FppgojouOk.hAC8HYsp9aBnOnYg?startTime=1762348241000"
    },
    {
        number: 8,
        title: "Verb - Modal verbs",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/5Q8eVxxZOwcjHKphlXaK_eU6gAgcmZgKoe2TUUmR7YPLpysqGYY_7FppgojouOk.hAC8HYsp9aBnOnYg?startTime=1762351504000"
    },
     {
        number: 9,
        title: "Gerund + infinitive + participle " ,
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/92oTvNLeK3pmGL1m_sjYJaGxzKlhpdl7_jYuqNDVh3yN5ZbQjc-2p2IRywxvjRVB.iNGeNvQg55vq_3EG?startTime=1763385006000"
    },
     {
        number: 10,
        title:  " Question Tag 1 ",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/92oTvNLeK3pmGL1m_sjYJaGxzKlhpdl7_jYuqNDVh3yN5ZbQjc-2p2IRywxvjRVB.iNGeNvQg55vq_3EG?startTime=1763389283000"
    },
    {
     number: 11,
        title:  " Question Tag 2 ",
        category: "English",
        videoUrl: " https://us06web.zoom.us/rec/share/eXTtCW-1tsr95pq_2ZrhCdLuvX3zgetBwf0zWSBV-XnQpYZowcLxStxauN_SWE6b.KMfkkV9PqWi8cWb2?startTime=1764162534000"
},
    {
        number: 12,
        title:  " S1-S6 Tricks + PYQs ",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/eXTtCW-1tsr95pq_2ZrhCdLuvX3zgetBwf0zWSBV-XnQpYZowcLxStxauN_SWE6b.KMfkkV9PqWi8cWb2?startTime=1764167953000"
       },
    {
        number: 13,
        title:  " Homonyms ",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/8I9fGtWjqNerGmSjwe6mqJbsXIOmTLneWWKDxvUr5BjsGWn2oPCV1otqmkZZ1VMB.ahgCwor0plM_9ZrM?startTime=1765378017000"
      },
    {
        number: 14,
        title:  " Correlating sentences S1-S2 ",
        category: "English",
        videoUrl: 'https://us06web.zoom.us/rec/share/h0Z_R_NjNxss78Kk-eYrFOYo9OMAi5bJhtVwjP3TWFnf43iJeqLBdAPH5Iz_Li8I.QSx8WX4Z4rbTLnLu'
      },
    {
        number: 15,
        title:  " Noun ",
        category: "English",
        videoUrl: "https://us06web.zoom.us/rec/share/xJB1HI0XNygNuqaXxChHArc0_K-VNm-U8tHWVeJXftQtnhX842mK_CztH5FhOox6.Zi71PKcMY1fDHegQ?startTime=1766759407000"
     },
    
    {
        number: 1,
        title: "Root words PYQ Class 1",
        category: "English Practice",
        videoUrl: "https://us06web.zoom.us/rec/share/ffMetGOn2Gn3vTwftbRLeB13sGbR5-8oVGzUNKZtvoqa5wy1qRFeytm2XKSO5dUp.i_KCMeY4IoD0VFnr"
    },
    {
        number: 2,
        title: "POS practice Class",
        category: "English Practice",
        videoUrl: "https://us06web.zoom.us/rec/share/zKd-fEBMxZ0305E5xWCLY4m4wtnjkOu7XHXwlesBoMkD4OkESU-kbfSWUVBc9eG6.l3S2jhNEunsKYBB7"
    },
    {
        number: 3,
        title: "Full Mock 2 Explanation",
        category: "English Practice",
        videoUrl: 'https://us06web.zoom.us/rec/share/g2VunkFmUqUjI_MShyY6DjsLykrpJlF1NrecjWJSvhBk31TWNwVSTTCv65rO43Kr.YIg74deDvhaLNODe'
     },
    {
        number: 4,
        title: "English Test 7/12 Explanation ",
        category: "English Practice",
        videoUrl:'https://us06web.zoom.us/rec/share/YZRF-2F-flEMSl_xOg1O0NB3g39cXVDuWdqMHpatosSmwKLVGjhnZHrNjaqYPdY.wcNg1KFMsh9x8MgF'
      },
      
      {
        number: 5,
        title: "Full Mock 4 Explanation",
        category: "English Practice",
        videoUrl:'https://us06web.zoom.us/rec/share/gX8hrQoPpPu8Amg-xkworUo-EVrxE-3FXYWvnEh23Q1nA5fIbcZrBaTUFFPT4hCw.CyHCJxpFJrfFU-A1?startTime=1765803638000'
      },
    
      {
        number: 6,
        title: "Full Mock 5 Explanation",
        category: "English Practice",
        videoUrl:'https://us06web.zoom.us/rec/share/I1l1kS9kJ7jX7Ukutx9W4UfBjJJRth2jCcMkdNuYApCwsvUpfvFsSz_2jVljP_Dn.3jtyI6HPTePetfli'
      },
    {
        number: 1,
        title: "Protein wali bimari",
        category: "One Pager",
        videoUrl: "https://us06web.zoom.us/rec/share/5Q8eVxxZOwcjHKphlXaK_eU6gAgcmZgKoe2TUUmR7YPLpysqGYY_7FppgojouOk.hAC8HYsp9aBnOnYg?startTime=1762347252000"
    },
     {
        number: 1,
        title: "Climatology 1",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/D3wZ-OD1mT48uy4n8gXYT8TitM4pXwIbcIrtOWwOgR0BAJfze1JuI5qriKhT88Uo.IP1Qtx8umLfCzmZh?startTime=1763470925000"
    },
     {
        number: 2,
        title: "Climatology 2",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/D3wZ-OD1mT48uy4n8gXYT8TitM4pXwIbcIrtOWwOgR0BAJfze1JuI5qriKhT88Uo.IP1Qtx8umLfCzmZh?startTime=1763475854000"
    },
    {
        number: 3,
        title: "Climatology 3",
        category: "Physical Geography",
        videoUrl: 'https://us06web.zoom.us/rec/share/8UyY49L9RZ6kEd-rumfXj3OFbQq1kh6TfvPyPbbddpMsYskP-lkxP_Zf6xT1FnPm.JgNdksnYbYJvZ6mU?startTime=1763557206000'
    },
     {
        number: 4,
        title: "Climatology 4",
        category: "Physical Geography",
        videoUrl:  'https://us06web.zoom.us/rec/share/8UyY49L9RZ6kEd-rumfXj3OFbQq1kh6TfvPyPbbddpMsYskP-lkxP_Zf6xT1FnPm.JgNdksnYbYJvZ6mU?startTime=1763562449000'
    },
    {
        number: 5,
        title: "Climatology 5",
        category: "Physical Geography",
        videoUrl:  "https://us06web.zoom.us/rec/share/e6kMVXUmun5jx4_EYgj5ixJl3niCqLxjNnlotS20O8B-lazYjTVrREXaD5qwFeXr.F_DzvLY25rnRq6mG"
    },
    {
        number: 6,
        title: " Oceanography Class 1 ",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763886517000"
    },
    {
        number: 7,
        title: " Oceanography Class 2",
        category: "Physical Geography",     
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763891961000"
    },
    {
        number: 8,
        title: "Oceanography Class 3",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763894841000" 
    },
    {
        number: 9,
        title: "Geomorphic Process + Chemical Weathering",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/pUhB2f3cmK08r-atssm1v_CPjeDsnRJmHiIaTCVZgmB4W18HAubtGTAWKh6HIYMX.ABSAdO_MXNryRq3s?startTime=1764075537000"
    },
    {
        number: 10,
        title: "Physical Weathering + Mass movements + PYQs",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/pUhB2f3cmK08r-atssm1v_CPjeDsnRJmHiIaTCVZgmB4W18HAubtGTAWKh6HIYMX.ABSAdO_MXNryRq3s?startTime=1764080038000"
     },
    
    {
        number: 11,
        title: "Earthquake",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/PpfKS2YET8Q_Wm0aCnW7dnvHS7FkH0lQrkI7u6uPv_Qxx3Ypp8IN_hLqr-e4vf1R.mDNmzLP_7tmb_l5S?startTime=1764248384000"
    },
    {
        number: 12,
        title: "Volcano",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/PpfKS2YET8Q_Wm0aCnW7dnvHS7FkH0lQrkI7u6uPv_Qxx3Ypp8IN_hLqr-e4vf1R.mDNmzLP_7tmb_l5S?startTime=1764253304000"
     },
    {
        number: 13,
        title: "Plate Tectonic Theory",
        category: "Physical Geography",
        videoUrl: "https://us06web.zoom.us/rec/share/TR-KU7aM4xyxJG7MCEFPnQ9IIhYSmYicmJqQk2WQUGwoL0p-VIQhEsVtCDJ1cg0L.7B8dG0BXkv_JWlb_?startTime=1764336151000"
    },
    {
        number: 1,
        title: " Root words Vocabulary " ,
        category: "English Vocab",
        videoUrl: "https://us06web.zoom.us/rec/share/zhpsyCC_-ytUUI6KiLrJSZXDVQYuTZ017jrOF2l5x-0LLxh2ynytXEs5ShEfVndw.kBcssDDIPsg98G5n"
     },
    {
        number: 2,
        title: " Vocabulary PYQ Class 1 " ,
        category: "English Vocab",
        videoUrl: 'https://us06web.zoom.us/rec/share/TR-KU7aM4xyxJG7MCEFPnQ9IIhYSmYicmJqQk2WQUGwoL0p-VIQhEsVtCDJ1cg0L.7B8dG0BXkv_JWlb_?startTime=1764339884000'
     },
    {
        number: 3,
        title: " Vocabulary PYQ Class 2 " ,
        category: "English Vocab",
        videoUrl: 'https://us06web.zoom.us/rec/share/o13kZdwRayYHFVYRui-fbfgh_FYNQmR4gjuiE_vtYq3UoOl5uv9TAtUj8rs-ZAEo.8CX5MLkkanmmwaA3'
    },
    {
	number: 1,
	title: "Chemical Reaction",
	category: "Chemistry",
	videoUrl:'https://us06web.zoom.us/rec/share/8I9fGtWjqNerGmSjwe6mqJbsXIOmTLneWWKDxvUr5BjsGWn2oPCV1otqmkZZ1VMB.ahgCwor0plM_9ZrM?startTime=1765371780000'
},
{

	number:2,
	title: "Acid-Base",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/r17GY8V9Ud7pItp72Y1q0d7gzoKwNMVkS0W4V4fjToCNsIVCntIf-c4Zqaz70H1c.mR12lQw_aBfSlohg?startTime=1765544547000'
},
{

	number: 3,
	title: "Salt",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/r17GY8V9Ud7pItp72Y1q0d7gzoKwNMVkS0W4V4fjToCNsIVCntIf-c4Zqaz70H1c.mR12lQw_aBfSlohg?startTime=1765549752000'
},
{

	number:4,
	title: "Metal And Non Metal Class 1",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/i4O57oFC_Ove1m7zDQSyx-FLw9gQXpgbmAnzIUkhTuK5hON2BKjBjjopHIh04syA.8qAx8v8PrGIN6Y4r?startTime=1765890071000'
},
{

	number:5,
	title: "Metal and non metal class 2",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/i4O57oFC_Ove1m7zDQSyx-FLw9gQXpgbmAnzIUkhTuK5hON2BKjBjjopHIh04syA.8qAx8v8PrGIN6Y4r?startTime=1765894226000'
},
{
	number: 6,
	title: "Carbon Class 1",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/TPU74iVXTWBja9HMDqxdwOdp2whKUBv0K4RkSW3ucTWrHhCeqZEkUWjW2KJABiah.IG3TzhTbuTlyw4El?startTime=1766064079000'
},
{

	number: 7,
	title: "Carbon Class 2",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/TPU74iVXTWBja9HMDqxdwOdp2whKUBv0K4RkSW3ucTWrHhCeqZEkUWjW2KJABiah.IG3TzhTbuTlyw4El?startTime=1766068845000'
},
{

	number: 8,
	title: "Soap+Detergent+Octane+Cetane No",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bj7LDZ3RClMi0B2zRpXtbm-HV6lXeQ_A5oa8labGRk0cPuBhWELk-Uuq18k_0zac.v7QInFGf3MZqpQou'
},
{

	number: 9,
	title: "Solution + Suspension + Colloid",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bX9G1TO_xe_MguIKaxJlaQdA2YrLZoEEttFbSJFfjT7NK28d_F41WytJAxspoHvY.7zWoM0F04xumr5kQ?startTime=1766494721000'
},
{

	number: 10,
	title: "Structure of Atom",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bX9G1TO_xe_MguIKaxJlaQdA2YrLZoEEttFbSJFfjT7NK28d_F41WytJAxspoHvY.7zWoM0F04xumr5kQ?startTime=1766500881000'
},
{

	number: 11,
	title: "Atoms & Molecules",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/8PmPCh0uepjLHZI_vjlFohH2Gw7wvW6Lv5xVn9lXHwbtUfI8sP3dqlfPudQGv58M.u7tKI8veLKFpZyp1'
},
{

	number: 12,
	title: "Periodic Table And Trends",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/xJB1HI0XNygNuqaXxChHArc0_K-VNm-U8tHWVeJXftQtnhX842mK_CztH5FhOox6.Zi71PKcMY1fDHegQ?startTime=1766754146000'
},
{
	number: 14,
	title: "Landform by Running water 1",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/RVJPTfkppVqcOjWqVDPMUHE7qYqvdhlH60xijLSLePaFIc3iGw-ag6k7lTJCrkpz.6r8oAGAO4l8ZyjFR?startTime=1764766866000'
},
{
	number: 15,
	title: "",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/RVJPTfkppVqcOjWqVDPMUHE7qYqvdhlH60xijLSLePaFIc3iGw-ag6k7lTJCrkpz.6r8oAGAO4l8ZyjFR?startTime=1764771552000'
},
{
	number: 16,
	title: "Landform by ground Water",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/RVJPTfkppVqcOjWqVDPMUHE7qYqvdhlH60xijLSLePaFIc3iGw-ag6k7lTJCrkpz.6r8oAGAO4l8ZyjFR?startTime=1764774204000'
},
{
	number: 17,
	title: "Landform by Glaciers",
	category: "Physical Geography",
	videoUrl:'https://us06web.zoom.us/rec/share/5IyklVW9uv15O55X4sawRsjbZMC4yvYUzPPhLqNj3Zmv0X_mZSzfBYmNvYxf7_oX.7KsjMciFeW3KGJpH?startTime=1764939443000'
},
{
	number: 18,
	title: "Landform by sea waves",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/5IyklVW9uv15O55X4sawRsjbZMC4yvYUzPPhLqNj3Zmv0X_mZSzfBYmNvYxf7_oX.7KsjMciFeW3KGJpH?startTime=1764943840000'
},
{
	number: 19,
	title: "Landform by wind",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/5IyklVW9uv15O55X4sawRsjbZMC4yvYUzPPhLqNj3Zmv0X_mZSzfBYmNvYxf7_oX.7KsjMciFeW3KGJpH?startTime=1764945588000'
},
{
	number: 20,
	title: "Universe + Solar System",
	category: "Physical Geography",
	videoUrl:'https://us06web.zoom.us/rec/share/EKlRzS-qzR5LDPWPdjT7F9aGkwbMS6yo7P7FsvMx77Lly-K4ryaEe7bRCE3T-von.FacUWZBZe7XWlkiL?startTime=1765199562000'
},
{
	number: 21,
	title: "Time and International dateline ",
	category: "Physical Geography",
	videoUrl: 'https://us06web.zoom.us/rec/share/EKlRzS-qzR5LDPWPdjT7F9aGkwbMS6yo7P7FsvMx77Lly-K4ryaEe7bRCE3T-von.FacUWZBZe7XWlkiL?startTime=1765203768000'
},
{
        number: 1,
        title: "English Breakfast 1 Explanation",
        category: "English Breakfast",
        videoUrl: "https://us06web.zoom.us/rec/share/w-dgiqPIo-tuD4NB880LD6yi5F8iNOWlew7rPh9mzdUh9WFjEO06v1rRs7vFnmyF.N4nWkX37vhUeWTFl?startTime=1766813425000"
},	
];

let currentCategory = 'all';

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="course-header">
            <div class="course-category">${course.category}</div>
            <div class="course-number">Class ${course.number}</div>
            <div class="course-title">${course.title}</div>
        </div>
        <div class="course-body">
            <a href="${course.videoUrl}" class="video-link" target="_blank" rel="noopener noreferrer">
                Watch Video ▶
            </a>
        </div>
    `;
    return card;
}

function renderCourses(coursesToRender) {
    const grid = document.getElementById('courseGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        grid.style.display = 'grid';
        
        coursesToRender.forEach(course => {
            grid.appendChild(createCourseCard(course));
        });
    }
    
    document.getElementById('visibleClasses').textContent = coursesToRender.length;
}

function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredCourses = courses;
    
    if (currentCategory !== 'all') {
        filteredCourses = filteredCourses.filter(course => 
            course.category === currentCategory
        );
    }
    
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.number.toString().includes(searchTerm)
        );
    }
    
    renderCourses(filteredCourses);
}

function handleSearch(event) {
    filterCourses();
}

function handleCategoryClick(event) {
    if (event.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        event.target.classList.add('active');
        currentCategory = event.target.dataset.category;
        
        filterCourses();
    }
}

function init() {
    document.getElementById('totalClasses').textContent = courses.length;
    renderCourses(courses);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.addEventListener('click', handleCategoryClick);
}

document.addEventListener('DOMContentLoaded', init);
