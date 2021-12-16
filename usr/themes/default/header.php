<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<!DOCTYPE HTML>
<html class="no-js" lang="zh">
<head>
    <meta charset="<?php $this->options->charset(); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php $this->archiveTitle(array(
            'category' => _t('分类 %s 下的文章'),
            'search' => _t('包含关键字 %s 的文章'),
            'tag' => _t('标签 %s 下的文章'),
            'author' => _t('%s 发布的文章')
        ), '', ' - '); ?><?php $this->options->title(); ?></title>
    <!-- 使用url函数转换相关路径 -->
    <link rel="stylesheet" href="//cdnjscn.b0.upaiyun.com/libs/normalize/2.1.3/normalize.min.css">
    <link rel="stylesheet" href="<?php $this->options->themeUrl('grid.css'); ?>">
    <link rel="stylesheet" href="<?php $this->options->themeUrl('style.css'); ?>">
    <link rel="stylesheet" href="<?php $this->options->themeUrl('./css/header.css'); ?>">
    <link rel="stylesheet" href="<?php $this->options->themeUrl('./css/sidebar.css'); ?>">
    <!--[if lt IE 9]>
    <script src="//cdnjscn.b0.upaiyun.com/libs/html5shiv/r29/html5.min.js"></script>
    <script src="//cdnjscn.b0.upaiyun.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <!--代码高亮插件样式-->
    <script src="<?php $this->options->themeUrl('./highlight/highlight.min.js'); ?>"></script>
    <link rel="stylesheet" href="<?php $this->options->themeUrl('./highlight/styles/idea.min.css'); ?>">
    <!--Jquery-->
    <script src="<?php $this->options->themeUrl('./jquery/jquery-3.6.0.min.js'); ?>"></script>
    <!--viewer插件样式-->
    <link rel="stylesheet" href="<?php $this->options->themeUrl('./viewer/viewer.min.css'); ?>">
    <!--文档导航样式-->
    <link rel="stylesheet" href="<?php $this->options->themeUrl('./nav/nav.css'); ?>">
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?4677aa6fa75fcfcbc36b37e4ef58174b";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <!-- 通过自有函数输出HTML头部信息 -->
    <?php $this->header(); ?>
</head>
<body>
<!--[if lt IE 8]>
    <div class="browsehappy" role="dialog"><?php _e('当前网页 <strong>不支持</strong> 你正在使用的浏览器. 为了正常的访问, 请 <a href="http://browsehappy.com/">升级你的浏览器</a>'); ?>.</div>
<![endif]-->

<!--网站头部-->
<header id="header" class="clearfix">
    <div class="container">
        <div class="row" style="display: flex;align-items: center">
<!--            <div class="site-name col-mb-12 col-2">-->
            <div class="site-name col-2">
                <?php if ($this->options->logoUrl): ?>
                    <a id="logo" href="<?php $this->options->siteUrl(); ?>">
                        <img src="<?php $this->options->logoUrl() ?>" alt="<?php $this->options->title() ?>"/>
                    </a>
                <?php else: ?>
                    <a id="logo" href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title() ?></a>
                    <!--<p class="description"><?php /*$this->options->description() */?></p>-->
                <?php endif; ?>
            </div>


            <!--搜索框-->
            <div class="site-search col-push-6 col-2 kit-hidden-tb">
                <form id="search" method="post" action="<?php $this->options->siteUrl(); ?>" role="search">
                    <label for="s" class="sr-only"><?php _e('搜索关键字'); ?></label>
                    <input type="text" id="s" name="s" class="text" placeholder="<?php _e('输入关键字搜索'); ?>"/>
                    <button type="submit" class="submit"><?php _e('搜索'); ?></button>
                </form>
            </div>
            <!--搜索框 end-->
            <!--导航栏-->
            <div class="col-mb-12 col-mb-12 col-push-6 col-3" >
                <nav id="nav-menu" class="clearfix" role="navigation">
                    <a<?php if ($this->is('index')): ?> class="current"<?php endif; ?>
                            href="<?php $this->options->siteUrl(); ?>"><?php _e('首页'); ?></a>
                    <?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
                    <?php while ($pages->next()): ?>
                        <a      <?php if ($this->is('page', $pages->slug)): ?> class="current"<?php endif; ?>
                                href="<?php $pages->permalink(); ?>"
                                title="<?php $pages->title(); ?>"><?php $pages->title(); ?></a>
                    <?php endwhile; ?>
                </nav>
            </div>
            <!--导航栏-->

        </div><!-- end .row -->
    </div>
</header><!-- end #header -->
<!--网站头部-->


    
    
