    const display = async (data) => {

        const shoedata = document.getElementById("showdata");
        shoedata.innerText = "";

        data.map((ele)=>{
            const box = document.createElement("div");
            box.setAttribute("id", "box");

            //first block
            const image = document.createElement("div");
            image.setAttribute("id", "image");
            const img = document.createElement("img");
            img.setAttribute("src", ele.carimage);
            img.setAttribute("id","car");
            const logo = document.createElement("img");
            logo.setAttribute("src", ele.logo);
            logo.setAttribute("id", "logo");
            image.append(img, logo);

            // second block

            const info = document.createElement("div");
            info.setAttribute("id", "info");


            const top = document.createElement("div");
            top.setAttribute("id", "top");
            
            const about = document.createElement("div");
            about.setAttribute("id", "about");
            const h4 = document.createElement("h4");
            h4.innerText = ele.name;
            const p = document.createElement("p");
            p.innerText = ele.desription;
            about.append(h4,p);

            const icon = document.createElement("div");
            icon.setAttribute("id", "icons");
            const i1 = document.createElement("i");
            i1.setAttribute("class","fa-solid fa-user");
            const span1 = document.createElement("span");
            span1.innerText = ele.seat;
            i1.append(span1);
            const i2 = document.createElement("i");
            i2.setAttribute("class", "fa-solid fa-suitcase-rolling");
            const span2 = document.createElement("span");
            span2.innerText = ele.bags;
            i2.append(span2);        
            const i3 = document.createElement("i");
            i3.setAttribute("class", "fa-solid fa-door-open");
            const span3 = document.createElement("span");
            span3.innerText = ele.door;
            i3.append(span3);
            const i4 = document.createElement("i");
            i4.setAttribute("class", "fa-solid fa-snowflake");
            const span4 = document.createElement("span");
            span4.innerText = "A/C";
            i4.append(span4);
            icon.append(i1,i2,i3,i4);

            top.append(about, icon);

            const end = document.createElement("div");
            end.setAttribute("id", "end");
            
            const section1 = document.createElement("div");
            section1.setAttribute("class", "section");
            
            const section1_i1 = document.createElement("i");
            section1_i1.setAttribute("class", "fa-solid fa-check");
            const section1_span1 = document.createElement("span");
            section1_span1.innerText = ele.f1;
            section1_i1.append(section1_span1);

            const section1_i2 = document.createElement("i");
            section1_i2.setAttribute("class", "fa-solid fa-check");
            const section1_span2 = document.createElement("span");
            section1_span2.innerText = ele.f2;
            section1_i2.append(section1_span2);

            const section1_i3 = document.createElement("i");
            section1_i3.setAttribute("class", "fa-solid fa-check");
            const section1_span3 = document.createElement("span");
            section1_span3.innerText = ele.f3;
            section1_i3.append(section1_span3);

            const section1_i4 = document.createElement("i");
            section1_i4.setAttribute("class", "fa-solid fa-check");
            const section1_span4 = document.createElement("span");
            section1_span4.innerText = ele.f3;
            section1_i4.append(section1_span4);
            section1.append(section1_i1, section1_i2, section1_i3, section1_i4);


            const section2 = document.createElement("div");
            section2.setAttribute("class", "section");

            const section2_i1 = document.createElement("i");
            section2_i1.setAttribute("class", "fa-solid fa-check");
            const section2_span1 = document.createElement("span");
            section2_span1.innerText = ele.f5;
            section2_i1.append(section2_span1);

            const section2_i2 = document.createElement("i");
            section2_i2.setAttribute("class", "fa-solid fa-check");
            const section2_span2 = document.createElement("span");
            section2_span2.innerText = ele.f6;
            section2_i2.append(section2_span2);

            section2.append(section2_i1, section2_i2);
            end.append(section1,section2);

            info.append(top,end);

            // third section
            const price = document.createElement("div");
            price.setAttribute("id","price");

            const price_div = document.createElement("div");

            const price_h4 = document.createElement("h4");
            price_h4.innerText = ele.economy;

            const price_div_div = document.createElement("div");
            const price_h2 = document.createElement("h2");
            const price_i = document.createElement("i");
            price_i.setAttribute("class","fa-solid fa-euro-sign");
            price_h2.append(price_i);
            price_h2.innerText = "€ " + ele.prize;

            const price_btn = document.createElement("button");
            price_btn.innerText = "View Deal";

            price_div_div.append(price_h2, price_btn);

            price_div.append(price_h4, price_div_div);

            price.append(price_div);

            box.append(image, info, price);
            shoedata.append(box);

        });


}
    
const small = (data) => {
    const smalldata = data.filter((ele) => {
        if (ele.type == 'small') {
            return ele;
        }
    });
    display(smalldata);
}
    

const medium = (data) => {
    const mediumdata = data.filter((ele) => {
        if(ele.type == 'medium'){
            return ele;
        }
        
    });
    display(mediumdata);
}

const large = (data) => {
    const largedata = data.filter((ele) => {
        if(ele.type == 'Lage'){
            return ele;
        }
        
    });
    display(largedata);
}
    let Init = async () => {
        let show = document.getElementById("showdata");

        var cars = [
            {
                id: 1,
                name: "Tata Indica",
                desription: "or similar Mini",
                type: "small",
                city: "banglore",
                seat: "5",
                bags: "2",
                door: "4",
                transmission: "M",
                AC: "yes",
                carimage: "data:image/jpeg;base64,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",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "5020",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same to same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "eDreams"
            },
            {
                id: 2,
                name: "Volkswagen polo",
                desription: "or similar Economy",
                type: "small",
                city: "banglore",
                seat: "5",
                bags: "1",
                door: "5",
                transmission: "M",
                AC: "yes",
                carimage: "https://thumbs.dreamstime.com/b/tula-russia-july-volkswagen-polo-sedan-white-compact-city-car-isolated-background-d-rendering-227202616.jpg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "6259",
                f1: "Fuel Policy Same to Same",
                f2: "Unlimited Milage icluded",
                f3: "Colliosion damage Waiver",
                f4: "Theft Protection Waiver",
                f5: "Third Part courage",
                f6: "Free Cancellation",
                economy: "Economy Bookings"
            },
            {
                id: 3,
                name: "Volkswagen up",
                desription: "or similar Mini",
                type: "small",
                city: "banglore",
                seat: "4",
                bags: "2",
                door: "2-4",
                transmission: "M",
                AC: "yes",
                carimage: "https://thumbs.dreamstime.com/b/vw-up-isolated-white-40041144.jpg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "6269",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same to same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Economy Bookings"
            },
            {
                id: 4,
                name: "Intermediate car",
                desription: "View deals for more details",
                type: "medium",
                city: "banglore",
                seat: "5",
                bags: "2",
                door: "4",
                transmission: "M",
                AC: "yes",
                carimage: "https://media.istockphoto.com/id/169941291/photo/white-compact-car.jpg?s=612x612&w=0&k=20&c=xByJGmyQY9bRIacqq82nNQld0vTAjsyXNKGEtLP4zb8=",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "9078",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same to same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Klook"
            },
            {
                id: 5,
                name: "Skoda Rapid Spaceback",
                desription: "or similar Intermediate estate car",
                type: "medium",
                city: "banglore",
                seat: "5",
                bags: "3",
                door: "5",
                transmission: "M",
                AC: "yes",
                carimage: "https://st2.depositphotos.com/1358992/9045/i/950/depositphotos_90457016-stock-photo-white-skoda-rapid.jpg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "9128",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same-to-same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Klook"
            },
            {
                id: 6,
                name: "Mercedes-Benz A-Class",
                desription: "or similar Intermediate estate car",
                type: "medium",
                city: "banglore",
                seat: "5",
                bags: "3",
                door: "5",
                transmission: "M",
                AC: "yes",
                carimage: "https://stimg.cardekho.com/images/car-images/large/Mercedes-Benz/A-Class-Sedan/6373/1612263813246/front-left-side-47.jpg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "32,596",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same-to-same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Economy Bookings"
            },
            {
                id: 7,
                name: "Volkswagen Passat",
                desription: "or similar Standard",
                type: "medium",
                city: "banglore",
                seat: "5",
                bags: "3",
                door: "4",
                transmission: "M",
                AC: "yes",
                carimage: "https://thumbs.dreamstime.com/b/yellow-volkswagen-passat-model-yellow-volkswagen-passat-model-isolated-white-background-247855364.jpg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                priz: "28,250",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same-to-same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Economy Booking"
            },
            {
                id: 8,
                name: "Toyata Camry",
                desription: "or similar Full-size",
                type: "Lage",
                city: "banglore",
                seat: "5",
                bags: "2",
                door: "4",
                transmission: "M",
                AC: "yes",
                carimage: "data:image/jpeg;base64,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",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "133,624",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same-to-same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Kayak"
            },
            {
                id: 9,
                name: "BMW 5 Series",
                desription: "or similar Luxury",
                type: "Large",
                city: "banglore",
                seat: "5",
                bags: "2",
                door: "4",
                transmission: "M",
                AC: "yes",
                carimage: "https://imgd.aeplcdn.com/0x0/n/cw/ec/96443/5-series-exterior-right-front-three-quarter-4.jpeg",
                logo: "https://sstravel.in/wp-content/uploads/2021/04/ss-travel1.png",
                prize: "201,608",
                f1: "Free Cancellation (48hr)",
                f2: "Fuel Ploicy same-to-same",
                f3: "Unlimited Milage icluded",
                f4: "Theft Protection Waiver",
                f5: "Colliosion damage Waiver",
                f6: "Third Part courage",
                economy: "Kayak"
            },
        ];
        

        // const res = await fetch("http://localhost:3000/cars");
        // const data = await res.json();

        document.getElementById("search").addEventListener("click", async () => {
            document.getElementById("upper").innerText = "";
            show.innerText = "";
            // Filter layput
            const upper_top1 = document.createElement("div");
            upper_top1.setAttribute("class", "upper_top");

            const heading = document.createElement("div");
            heading.setAttribute("class", "heading");
            heading.innerText = "Filter based on cars type";
            
            const cartypes1 = document.createElement("div");
            cartypes1.setAttribute("class", "cartypes");

            const div1 = document.createElement("div");
            const img1 = document.createElement("img");
            img1.setAttribute("src", "https://www.motorparks.co.uk/feeds/do-cap-image.aspx?capid=43390");
            img1.addEventListener("click", () => {
                small(cars);
            });
            const h4_1 = document.createElement("h4");
            h4_1.innerText = "small";
            div1.append(img1, h4_1);

            const div2 = document.createElement("div");
            const img2 = document.createElement("img");
            img2.setAttribute("src", "https://d11unpj7eou730.cloudfront.net/thumbs/p-nc-p-s400-ver4/images/cars/generic/Maruti-Suzuki-Swift-DZire-Top-Medium-Sized-Family-Car.jpg")
            img2.addEventListener("click", () => {
                medium(cars);
            })
            const h4_2 = document.createElement("h4");
            h4_2.innerText = "Medium";
            div2.append(img2, h4_2);

            const div3 = document.createElement("div");
            const img3 = document.createElement("img");
            img3.setAttribute("src", "https://imgd.aeplcdn.com/600x337/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75.jpg");
            img3.addEventListener("click", () => {
                large(cars);
            })
            const h4_3 = document.createElement("h4");
            h4_3.innerText = "Large";
            div3.append(img3, h4_3);

            const div4 = document.createElement("div");
            const img4 = document.createElement("img");
            img4.setAttribute("src", "https://cdn.pixabay.com/photo/2017/08/26/18/22/car-2683858_960_720.jpg");
            const h4_4 = document.createElement("h4");
            h4_4.innerText = "SUV";
            div4.append(img4, h4_4);

            cartypes1.append(div1, div2, div3, div4);
            upper_top1.append(heading, cartypes1);


            const upper_top2 = document.createElement("div");
            upper_top1.setAttribute("class", "upper_top");

            const heading2 = document.createElement("div");
            heading2.setAttribute("class", "heading");
            heading2.innerText = "Filter Options";
            
            const cartypes2 = document.createElement("div");
            cartypes2.setAttribute("class", "cartypes");

            const div11 = document.createElement("div");
            const Supplier = document.createElement("select");
            Supplier.setAttribute("id", "Supplier");
            const option1 = document.createElement("option");
            option1.innerText = "Supplier";
            const option2 = document.createElement("option");
            option2.innerText = "Europcar";
            const option3 = document.createElement("option");
            option3.innerText = "SS Travels";
            Supplier.append(option1, option2, option3);
            div11.append(Supplier);

            const div22 = document.createElement("div");
            const Policies = document.createElement("select");
            Policies.setAttribute("id", "Policies");
            const option12 = document.createElement("option");
            option12.innerText = "Policies";
            const option22 = document.createElement("option");
            option22.innerText = "Free Cancellation";
            const option32 = document.createElement("option");
            option32.innerText = "Fair Fuel Policy";
            const option42 = document.createElement("option");
            option42.innerText = "Unlimited Milage";
            Policies.append(option12, option22, option32, option42);
            div22.append(Policies);

            const div33 = document.createElement("div");
            const cepacity = document.createElement("select");
            cepacity.setAttribute("id", "cepacity");
            const option13 = document.createElement("option");
            option13.innerText = "Cepacity";
            const option23 = document.createElement("option");
            option23.innerText = "passenger 3 to 5";
            const option33 = document.createElement("option");
            option33.innerText = "6 or more";
            cepacity.append(option13, option23, option33);
            div33.append(cepacity);

            cartypes2.append(div11, div22, div33);

            upper_top2.append(heading2, cartypes2);

            document.getElementById("upper").append(upper_top1, upper_top2);

            let value = document.getElementById("from").value;
            const citydata = cars.filter((ele) => {
                if (ele.city == value) {
                    return ele;
                }
            });

            if (citydata.length == 0) {
                alert(`please select a diffrent city, Correctly not available in ${value}`);
            }
            else {
                setTimeout(() => {
                    display(citydata);
                }, 1000);
            }


        });

        



    }
    Init();