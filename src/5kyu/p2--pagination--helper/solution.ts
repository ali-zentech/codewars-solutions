// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1
export class PaginationHelper {
    items: number[];
    page_limit: number; 
  
      constructor(collection:number[], itemsPerPage:number) {
      // The constructor takes in an array of items and a integer indicating how many
      this.items = collection; 
      this.page_limit = itemsPerPage; 
      // items fit within a single page
      }
      itemCount() {
      return this.items.length; 
      // returns the number of items within the entire collection
      }
      pageCount() {
      return Math.ceil(this.items.length / this.page_limit)
      // returns the number of pages
      }
    
      pageItemCount(pageIndex: number) {
      pageIndex += 1;
      // returns the number of items on the current page. page_index is zero based.
      if(pageIndex < this.pageCount()){
        return this.page_limit;
      }
      if(pageIndex === this.pageCount()) {
        return this.items.length % this.page_limit; 
      }
      return -1
      // this method should return -1 for pageIndex values that are out of range
      }
    
      pageIndex(itemIndex: number) {
      // determines what page an item is on. Zero based indexes
      if(itemIndex < 0 || itemIndex >(this.items.length - 1)){
        return -1
      }
      if(itemIndex < this.page_limit) {
        return 0;
      }
       
      return Math.floor(itemIndex/this.page_limit)
      
      // this method should return -1 for itemIndex values that are out of range
      }
  }

  // prposed solution 
  // 