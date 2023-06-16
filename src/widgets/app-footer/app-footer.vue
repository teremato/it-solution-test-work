<template>
    <footer>
        <div class="bg-light-primary h-[152px] sm:h-full">
            <div class="grid grid-cols-4 h-full text-white
                sm:grid-cols-1 sm:justify-items-center">
                <h1 class=" m-auto text-[48px] leading-[55px] sm:mt-[37px] sm:mb-[30px] sm:row-start-1">
                    LOGO
                </h1>
                <section class="mt-[35px] sm:text-center sm:mt-0 sm:mb-[20px]">
                    <h3 class="font-bold text-[14px] leading-[16px] mb-[10px]">Company name</h3>
                    <ul>
                        <li class="text-[14px] leading-[16px] mb-[7px]">Reg. nr: 437568</li>
                        <li class="text-[14px] leading-[16px] mb-[7px]">
                            Peterburi tee 710<br/>Tallinn Harjumaa 34235
                        </li>
                    </ul>
                </section>
                <section class="mt-[35px] sm:text-center sm:row-start-2 sm:mt-0 sm:mb-[20px]">
                    <h3 class="font-bold text-[14px] leading-[16px] mb-[14px]">Свяжись с нами</h3>
                    <ul>
                        <li class="flex items-center gap-[7px] font-bold text-[14px] leading-[16px] mb-[7px]
                            sm:justify-center">
                            <img src="@icons/i__phone-green.svg" alt="Телефон">
                            <a class="link" href="tel:+372 475685">
                                +372 475685
                            </a>
                        </li>
                        <li class="flex items-center gap-[7px] font-bold text-[14px] leading-[16px]">
                            <img src="@icons/i__mail-green.svg" alt="Почта">
                            <span>info@example.ee</span>
                        </li>
                    </ul>
                </section>
                <section class="mt-[35px] sm:text-center sm:mt-0">
                    <h3 class="font-bold text-[14px] leading-[16px] mb-[10px]">Полезные ссылки</h3>
                    <ul>
                        <li class="text-[14px] leading-[16px] mb-[7px]">
                            <a class="link" href="#">О нас</a>
                        </li>
                        <li class="text-[14px] leading-[16px] mb-[7px]">
                            <a class="link" href="#">Часто задаваемые вопросы</a>
                        </li>
                        <li class="text-[14px] leading-[16px]">
                            <a class="link" href="#">Контакты</a>
                        </li>
                    </ul>
                </section>
                <section class="mt-[20px] mb-[20px] hidden sm:block">
                    <ul class="flex items-center gap-[20px]">
                        <li>
                            <a href="#">
                                <img src="@icons/i__facebook-small.svg" alt="facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="@icons/i__vk-small.svg" alt="vk">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="@icons/i__inst-small.svg" alt="instagramm">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="@icons/i__twit-small.svg" alt="twitter">
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="bg-black h-[56px]"></div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
</style>