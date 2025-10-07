import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/Storage";
import ReadBook from "../../components/ReadBook/ReadBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  return (
    <div className="max-w-[80%] mx-auto mt-8">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Book</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
