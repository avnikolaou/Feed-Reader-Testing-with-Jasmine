$(function() {
    describe("RSS Feeds", function() {
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds object and ensures it has a URL defined and not empty. */

        it("have a URL defined and not empty", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            })
        });

        /* Test that loops through each feed in the allFeeds object and ensures it has a name defined and not empty. */

        it("have a name defined and not empty", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            })
        });
    });


    /* Test suite named "The menu" for menu functionality. */

    describe("The Menu", function () {

        /* Test that ensures the menu element is hidden by default. */
        
        it("menu element hidden by default", function () {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })

        /* Test that ensures the menu changes visibility when the menu icon is clicked. */
        
        it("menu changes visibility when the menu icon is clicked", function () {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })
    });

    /* Test suite named "Initial Entries" for feed loading functionality. */

    describe("Initial Entries", function () {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        let feedLength;
        beforeEach(function (done) {
            loadFeed(0, function () {
                feedLength = $(".feed").length;
                done();
            });
        });

        it("feed container contains an entry element", function (done) {
            expect(feedLength).toBeGreaterThan(0);
            done();
        });
    });


    /* Test suite named "New Feed Selection" for the feed selection functionality. */
    
    describe("New Feed Selection", function () {
        
        /* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. */
        let firstFeed, secondFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = document.querySelector('.feed').innerHTML;
            });

            loadFeed(1, function () {
                secondFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        });

        it("content changed",function (done) {
            expect(firstFeed !== secondFeed).not.toBe(false);
            done();
        });
    });
}());
