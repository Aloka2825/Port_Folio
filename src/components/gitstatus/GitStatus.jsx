import React from "react";
import Title from "../layouts/Title";

function GitStatus() {
  return (
    <section id="gitstatus" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Git" desc="Git Status" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-16 gap-8 sm:gap-16">
        <div className="w-full sm:w-auto">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Aloka2825&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
            alt="Aloka2825's GitHub Stats"
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-auto">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aloka2825&theme=vue-dark&show_icons=true&hide_border=true&layout=compact"
            alt="Aloka2825's Top Languages"
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-auto">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Aloka2825&theme=vue-dark&hide_border=true"
            alt="Aloka2825's GitHub Streak"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default GitStatus;
