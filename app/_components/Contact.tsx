import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/estebanlopezdev/"
          name="Esteban"
          image="./esteban.webp"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="256"
        />
        <ContactCard
          className="flex-1"
          url="https://www.malt.fr/profile/estebanlopez6"
          name="Esteban"
          image="./esteban.webp"
          mediumImage="https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"
          description="Freelance"
        />
        <ContactCard
          className="flex-1"
          url="mailto:babanlopezdev@gmail.com"
          name="@gmail.com"
          image="./esteban.webp"
          mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABL1BMVEX////qQjU1qFNChfT6uwDFIhwtpk07gvSWtPiQyJw8qlhHiPTd7uHb5vzhOzHtYS/6uArqOzZomvZhtnT81IXqPjDEFg7BAADajIn87e3pNibpMiHqOiz++Pj/uwDuc2zrVkz0rqvsZV3529rpLBj55OPoHgDxl5LtbWX4z87rSz/1ubbqT0XwjYnrXlbHGQBbhOnvgXzyo6D2w8D09/4Anzn+9erltLPSbm3FKyf936v7yWL6vSb+4rf+8t7dmZn+253968/IQ0P7wkLQYl/4yLfsWBzTnKnx1I+Mb7a/PUyps053gdexTXHcuTeKslulYpPIuEhdrmDFNDd2sWCst168S2Dquy6gaJ+Ge8iatFrHT1Tdb3jjgGSuv/Sm0q9+pvZ4vofH1vvF4MoMcvLnEsnZAAAGYklEQVR4nO2b61sTRxSHZzYELEi7VTZhrxCySQi5QLgjEVSsrdVaUVq0tgot///f0FlATbI7F2ZnyPg85/3CF3aS9zm/OWdvQQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBG6bjimj97eVvjJobuzu1cql0t7uzu3bLT9YL9v2/ZEf//htor1wup8IlIqFkvkb3m+dns6B3N2NHFNNDH3OPeCtcNiuThAuXxYU/A9BTh49FXlUsd+lLM6zd1yqThEqfy0qubbsnm8P6SSYO/nKk7zSbmYovxkR3vUwodHKRdSnKMcNrW3GS6kOHvzmqO2PddPqyS1OTqQXvNppkvSCvRGLSNiX5Imu+YhxeWyODsqv/0wD7PLcsUjuTXdJyWqDOkDu0oFBqCW5ZIjuZY2z3BJ+sCelo1zwCpLwpzMquFTtgzZOeq7WviTzXGx92U+tMlK2ZWN33DVuriNZzyZCan2vMNRIXzvLzRVujQX/B+4Mv0HEisf8gpDZLDXrSiLWljpej/yZaQ2zfyqgAwOcEdR1NwGWUybjEhlMHa8ZSVRay57Dh63DCnOSiW/S2UlSNYauwwOnE7OjRN2nEsXA2Qw9hdznatVF/3rhUyQwZ7TkndpOR42SQY70gPUbfgONksG41hugDYX4oFFTJHBfrt14z4Qtto+NlEGB17jhifStYYXYDNlyMa5WdTIuZiDTZUhXW3xBudqlUVv9HijZG5wruZ2cJA63CwZcq62JDRAq0uekz7aMBkSNZ/f1cKWn4qYoIwtI/PzHtcmWwY7dV7U3E49oyxCMpH9i4TMnee/8q5oKDJkgHaZPbrWjSkHcmWi0xffychMvfxtlV0cqgz2AnrUwlaQGTERmejV75NyMlNrr/eYxaHLJOdqlOLUGqPDRVgm6h+/mZSUKUzNsKPGkCHFyR6gzQVqWXgyJGLTliUrQ2BGjSmDg4wBGlYW08NFUIZEjLjkkSmsvStSbdgyGQM0c1CKyUT28RvLyilTmHn+lhY1jgx2gu7QAK12A/p2YctE/T+mrfwyhamXHyg2PBlSnHjgZkclZpeFIROdnliWChnSB16XMqPGl8G43vu8cXp1/n9TZOzjaUuRDNHJjpqIDI6vbnZUuz7/f7NlSMQsS50MidqfGcURksHeSisMWyusjsyUsU9PJpXKFMgATRdHTAYHQaMRcLcLRSYZlJalVibpaqkBKihDTgcYQ58tczUolcskA3QkaqIy4ozK2FeDUoNMaoBql7FHIqZSplB4P7RxNMtE/b9Gy6JUprD2oXxbMtFRuixqZQqF11/PPLXKRMdZKoplSNRK+mVIxLJdFMuQK9DrPqBPxn51QnFRLEMG6LurPqBLJjUoNcp8uQLVJJMelDplCtdXoHpkovSg1CxDBujqqh6ZF/SI6ZKZmnn/lnb3K4fMsz6zLJpkkuL8TbkvKY0T/0PtYpplZmYFLoRvArnIvsupi0YZVE0/YpHHI9ek45RBtZ6jKGqO06uh8cqgcL2tpDheez258zFeGYQ2lkRuVXDwlzYuFxu3DKp1RK+KaTh+5/o2+9hlkFvBuYrj48rn+7jjl0milmOAxtcRM0WGdDXZqDl+b+BJjhEypKt5UgM08NYHH3yYIYNQc0Vi4/grw4+kTJFB7gLvicUojrcw8gTHGBmE1jnPkkYI8ProCgbJoI2ueB9w/O5GagGTZMgAFS1O4PQynkcbJZM8ghU6V/MW17PeFDBLBoXNZYGu5i83M996MExGZIAOD0qjZUjUfObGCXzqK3bmySBUDRhR8wP6G2kmyiC0HFOi5sTLjMPMlKEN0IxB+Q3IoOZS+vaAEyyx3681VSZjgAaY1sWMlyFXoMM3O7x2hfdqrbkySdQGrkBjTsRMlyFR+3wL16l3BF6uN1oGha34MmpeLPSzB7NlyABtk6jFbbHfPpkug9xevd4TfKneeBmEKsK/F/wGZMQBGT4gkxuQ4QMyuQEZPiCTG5DhAzK5ARk+IJMbkOEDMrnRJPOR5zImGeuTxLKza7zSjEVm8s1dmXXPzJQ5l1r33xkTZab/k1uY1wLGISO1/RM2zy5Mk9mSC1nC5p0LVnFuXWZyS7YuCZuz9y4upmgUdMhYkzS2tu5LNbIBZj+e3aNwpkPm/D6F8095VQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgg/8BlMkOXnxdg8kAAAAASUVORK5CYII="
          description="Email me for any question"
        />
      </div>
    </Section>
  );
};
