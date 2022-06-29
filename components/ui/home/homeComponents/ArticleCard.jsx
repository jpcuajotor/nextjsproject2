import React from "react";
import Link from "next/link";
import { FadedRegularText, SubHeadingText } from "../../core/Text";
import {
  getMonth,
  getDate,
  getFullYear,
} from "../../../../utils/date/DateFunctions";
const tagsList = [
  {
    id: "1",
    name: "Acne",
    categoryId: "1",
    imageUrl:
      "https://media.istockphoto.com/photos/acne-on-womans-face-with-rash-skin-scar-and-spot-that-allergic-to-picture-id1270415883?b=1&k=20&m=1270415883&s=170667a&w=0&h=GeAndunkNgqbI2lqixqSb-aDi9Uq2Hu2qA7VaIyEITE=",
  },
  {
    id: "2",
    name: "Hair Care",
    categoryId: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFpciUyMGNhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "3",
    name: "Hair Loss",
    categoryId: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1633179963355-44f57f194d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGxvc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "4",
    name: "Healthy Skin",
    categoryId: "1",
    imageUrl:
      "https://media.istockphoto.com/photos/beauty-face-woman-with-natural-makeup-and-healthy-skin-portrait-picture-id1254804412?b=1&k=20&m=1254804412&s=170667a&w=0&h=VzB6LLiSW4979EpkUz_-doYWb9wfid669aQh28gGRmw=",
  },
  {
    id: "5",
    name: "Addiction",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWRkaWN0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "6",
    name: "Anger Management",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1609852234838-147db6815968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5nZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "7",
    name: "Anxiety",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1595178156906-2396ef837b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW54aWV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "8",
    name: "Depression",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1523495338267-31cbca7759e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW54aWV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "9",
    name: "Happiness",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcGluZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "10",
    name: "Smoking Addiction",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1528671839653-1f8ab2e4bda1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGFkZGljdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11",
    name: "Cholesterol Management",
    categoryId: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1634639121634-c2d378816bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGFkZGljdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "12",
    name: "Diabetes",
    categoryId: "3",
    imageUrl:
      "https://media.istockphoto.com/photos/mature-woman-doing-blood-sugar-test-at-home-picture-id537952495?b=1&k=20&m=537952495&s=170667a&w=0&h=L7jdOZfNCMxGd3AbYyBh_1qxhOJIFu4sJPre8u7OBKo=",
  },
  {
    id: "13",
    name: "Thyroid",
    categoryId: "3",
    imageUrl:
      "https://media.istockphoto.com/photos/woman-showing-painted-thyroid-gland-on-her-neck-enlarged-thyroid-picture-id1285293226?b=1&k=20&m=1285293226&s=170667a&w=0&h=arj4zVhGiwJcK62fhJ5IdaBMhu5f2-CJ54S0vompYMI=",
  },
  {
    id: "14",
    name: "Back Pain",
    categoryId: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1618914241652-ff0a094b5a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMHBhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "15",
    name: "Headache",
    categoryId: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1600440022108-5fb22c725311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZGFjaGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "16",
    name: "Bad Breath",
    categoryId: "5",
    imageUrl:
      "https://media.istockphoto.com/photos/the-woman-has-oral-problems-she-has-bad-breath-picture-id1275828970?b=1&k=20&m=1275828970&s=170667a&w=0&h=sznd-0ZVsY4UHZu07cNVSkoWjhd7oiSf8X6zOqjS16U=",
  },
  {
    id: "17",
    name: "Dental Braces",
    categoryId: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwYnJhY2VzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "18",
    name: "Oral Hygiene",
    categoryId: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1622115914441-fe73c383673d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkJTIwYnJlYXRofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "19",
    name: "Before Pregnancy",
    categoryId: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1615766553246-9147b6d50e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByZWduYW5jeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "20",
    name: "Childhood Nutrition",
    categoryId: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1615723412368-65806eaac24f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRob29kJTIwbnV0cml0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "21",
    name: "Parenting",
    categoryId: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1560328055-851c3b903ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFyZW50aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "22",
    name: "Cancer Awareness",
    categoryId: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbmNlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "23",
    name: "Cancer Prevention",
    categoryId: "7",
    imageUrl:
      "https://media.istockphoto.com/photos/world-cancer-day-colorful-awareness-ribbons-blue-red-green-pink-and-picture-id1272269821?b=1&k=20&m=1272269821&s=170667a&w=0&h=HtdV9qUH6HzKgfWJtd5fK8Zk9DYhMwDbtxtPmf7kwzY=",
  },
  {
    id: "24",
    name: "Healthy Digestion",
    categoryId: "8",
    imageUrl:
      "https://media.istockphoto.com/photos/love-your-body-picture-id658448788?b=1&k=20&m=658448788&s=170667a&w=0&h=KuUWhw3pRGYFLeSqy4T82YUfxXtiehdzhyKKcSKJ9rc=",
  },
  {
    id: "25",
    name: "Sleep Disorders",
    categoryId: "8",
    imageUrl:
      "https://images.unsplash.com/photo-1515894203077-9cd36032142f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2xlZXAlMjBkaXNvcmRlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "26",
    name: "Diet",
    categoryId: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "27",
    name: "Healthy Eating",
    categoryId: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1554982612-dee66ebddaec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGRpZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "28",
    name: "Vitamins & Supplements",
    categoryId: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1627467959081-97831c0d645f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpdGFtaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "29",
    name: "Running",
    categoryId: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "30",
    name: "Sports Injuries",
    categoryId: "10",
    imageUrl:
      "https://media.istockphoto.com/photos/suffering-from-pain-in-ankle-picture-id1279737121?b=1&k=20&m=1279737121&s=170667a&w=0&h=_XfsStRFFLtLHrLZTZR3Ds4eto9cicJhEXv3ytKEsFw=",
  },
  {
    id: "31",
    name: "Weight Training",
    categoryId: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VpZ2h0JTIwdHJhaW5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "32",
    name: "Yoga",
    categoryId: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "33",
    name: "Fertility",
    categoryId: "11",
    imageUrl:
      "https://images.unsplash.com/photo-1511981455162-18bba169f5b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZlcnRpbGl0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "34",
    name: "Sexual Well-Being",
    categoryId: "11",
    imageUrl:
      "https://images.unsplash.com/photo-1480623826718-27e89ac63a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvdXBsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "35",
    name: "Obesity",
    categoryId: "12",
    imageUrl:
      "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2Jlc2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "36",
    name: "Weight Gain",
    categoryId: "12",
    imageUrl:
      "https://media.istockphoto.com/photos/food-alcohol-left-after-christmas-holidays-and-woman-with-measuring-picture-id1312457921?b=1&k=20&m=1312457921&s=170667a&w=0&h=pdWUCU4-mJzDrhO3FrmQVoQnq4DDW2hoj1eOVM5ZKQo=",
  },
  {
    id: "37",
    name: "Weight Loss",
    categoryId: "12",
    imageUrl:
      "https://media.istockphoto.com/photos/above-view-of-african-american-lady-measuring-her-waist-with-tape-on-picture-id1295750034?b=1&k=20&m=1295750034&s=170667a&w=0&h=p6bWP0qLNoLkKS0yKDnbbICBE3NNzzzTRnTqMpCrHZk=",
  },
];
const ArticleCard = ({ article }) => {
  const { id, imageUrl, headline, tagId, author, lastUpdatedAt } = article;
  return (
    <Link href="/home">
      <div className="h-auto mr-3 border rounded-xl shadow-lg overflow-hidden cursor-pointer scroll-smooth w-72 flex-none border">
        <div className="overflow-hidden flex items-center justify-center mt-2">
          <img src={imageUrl} alt="article" className="w-[95%] rounded-xl" />
        </div>
        <div className="p-2.5 flex flex-col justify-between">
          <div className="flex mb-1">
            <FadedRegularText classes="text-sm mr-1">
              {getMonth(lastUpdatedAt)}
            </FadedRegularText>
            <FadedRegularText classes="text-sm mr-2">
              {getDate(lastUpdatedAt) + ","}
            </FadedRegularText>
            <FadedRegularText classes="text-sm">
              {getFullYear(lastUpdatedAt)}
            </FadedRegularText>
          </div>
          <SubHeadingText
            textAlign="left"
            fontWeight="bold"
            classes="text-articleHead mb-4 text-cardTypo"
          >
            {headline}
          </SubHeadingText>
          <div className="flex w-full flex-wrap">
            {tagId.map((tag, idx) => {
              return (
                <span
                  className="text-sm mr-3 my-1 font-medium px-6 py-1.5 bg-skyBlue/50 drop-shadow rounded-lg text-cardTypo/80"
                  key={idx}
                >
                  {tagsList[tag - 1].name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
