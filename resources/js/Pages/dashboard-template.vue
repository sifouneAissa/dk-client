<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Navbar from '@/Partials/Navbar.vue';
import HeaderSlider from '@/Partials/HeaderSlider.vue';
import IconsSlider from '@/Partials/IconsSlider.vue';
import Products from '@/Partials/Products.vue';
import Stretcher from '@/Partials/Stretcher.vue';
import CBanner from '@/Partials/CBanner.vue';
import Footer from '@/Partials/Footer.vue';
import Blog from '@/Partials/Blog.vue';
import Instagram from '@/Partials/Instagram.vue';

</script>

<template>
    <div>

        <div class="page-loader"></div>

        <div class="wrapper">

            <!--Use class "navbar-fixed" or "navbar-default" -->
            <!--If you use "navbar-fixed" it will be sticky menu on scroll (only for large screens)-->

            <!-- ======================== Navigation ======================== -->
            <Navbar />

            <!-- ========================  Header content ======================== -->
            <HeaderSlider />

            <!-- ========================  Icons slider ======================== -->
            <IconsSlider />

            <!-- ========================  Products widget ======================== -->
            <Products />

            <!-- ========================  Stretcher widget ======================== -->
            <Stretcher />

            <!-- ========================  Blog Block ======================== -->

            <section class="blog blog-block">

                <div class="container">

                    <!-- === blog header === -->

                    <header>
                        <div class="row">
                            <div class="col-md-offset-2 col-md-8 text-center">
                                <h2 class="title">Interior ideas</h2>
                                <div class="text">
                                    <p>Keeping things minimal</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="row">

                        <!-- === blog item === -->

                        <div class="col-sm-4">
                            <article>
                                <a href="article.html">
                                    <div class="image">
                                        <img src="dist/assets/images/project-1.jpg" alt="" />
                                    </div>
                                    <div class="entry entry-block">
                                        <div class="date">28 Mart 2017</div>
                                        <div class="title">
                                            <h2 class="h3">Creating the Perfect Gallery Wall </h2>
                                        </div>
                                        <div class="description">
                                            <p>
                                                You’ve finally reached this point in your life- you’ve bought your first home, moved
                                                into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                                after all of your kids have left the nest.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="show-more">
                                        <span class="btn btn-main btn-block">Read more</span>
                                    </div>
                                </a>
                            </article>
                        </div>

                        <!-- === blog item === -->

                        <div class="col-sm-4">
                            <article>
                                <a href="article.html">
                                    <div class="image">
                                        <img src="dist/assets/images/project-2.jpg" alt="" />
                                    </div>
                                    <div class="entry entry-block">
                                        <div class="date">25 Mart 2017</div>
                                        <div class="title">
                                            <h2 class="h3">Making the Most Out of Your Kids Old Bedroom</h2>
                                        </div>
                                        <div class="description">
                                            <p>
                                                You’ve finally reached this point in your life- you’ve bought your first home, moved
                                                into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                                after all of your kids have left the nest.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="show-more">
                                        <span class="btn btn-main btn-block">Read more</span>
                                    </div>
                                </a>
                            </article>
                        </div>

                        <!-- === blog item === -->

                        <div class="col-sm-4">
                            <article>
                                <a href="article.html">
                                    <div class="image">
                                        <img src="dist/assets/images/project-3.jpg" alt="" />
                                    </div>
                                    <div class="entry entry-block">
                                        <div class="date">28 Mart 2017</div>
                                        <div class="title">
                                            <h2 class="h3">Have a look at our new projects!</h2>
                                        </div>
                                        <div class="description">
                                            <p>
                                                You’ve finally reached this point in your life- you’ve bought your first home, moved
                                                into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                                after all of your kids have left the nest.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="show-more">
                                        <span class="btn btn-main btn-block">Read more</span>
                                    </div>
                                </a>
                            </article>
                        </div>

                    </div> <!--/row-->
                    <!-- === button more === -->

                    <div class="wrapper-more">
                        <a href="ideas.html" class="btn btn-main">View all posts</a>
                    </div>

                </div> <!--/container-->
            </section>

            <!-- ========================  Banner ======================== -->
            <CBanner />

            <!-- ========================  Blog ======================== -->
            <Blog />

            <!-- ========================  Instagram ======================== -->
            <Instagram />
            <!-- ================== Footer  ================== -->

            <Footer />

        </div> <!--/wrapper-->

    </div>
</template>
