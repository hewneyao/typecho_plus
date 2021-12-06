<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php $this->need('header.php'); ?>

<div class="col-mb-12 col-push-1 col-9" id="main" role="main">
    <article class="post post-detail" id="article" itemscope itemtype="http://schema.org/BlogPosting">
        <h1 class="post-title" itemprop="name headline">
            <a itemprop="url" href="<?php $this->permalink() ?>"><?php $this->title() ?></a>
        </h1>
        <ul class="post-meta">
            <li itemprop="author" itemscope itemtype="http://schema.org/Person"><?php _e('作者: '); ?>
                <a itemprop="name" href="<?php $this->author->permalink(); ?>" rel="author"><?php $this->author(); ?></a>
            </li>
            <li><?php _e('时间: '); ?>
                <time datetime="<?php $this->date('c'); ?>" itemprop="datePublished"><?php $this->date(); ?></time>
            </li>
            <li><?php _e('分类: '); ?><?php $this->category(','); ?></li>
            <li itemprop="keywords" class="tags"><?php _e('标签: '); ?><?php $this->tags(', ', true, 'none'); ?></li>
        </ul>
        <!--        <hr>-->
        <div class="post-content" itemprop="articleBody">
            <?php $this->content(); ?>
        </div>
        <!--<p itemprop="keywords" class="tags"><?php /*_e('标签: '); */ ?><?php /*$this->tags(', ', true, 'none'); */ ?></p>-->
    </article>
    <?php /*$this->need('comments.php'); */ ?>

    <ul class="post-near">
        <li>上一篇: <?php $this->thePrev('%s', '没有了'); ?></li>
        <li>下一篇: <?php $this->theNext('%s', '没有了'); ?></li>
    </ul>
</div><!-- end #main-->

<div class="col-mb-12 col-push-1 col-2">
    <div class="BlogAnchor">
        <p>
            <b id="AnchorContentToggle" title="收起" style="cursor:pointer;">目录[-]</b>
        </p>
        <div class="AnchorContent">
            <ul id="AnchorContent">

            </ul>
        </div>
    </div>
</div><!-- end #main-->

<?php /*$this->need('sidebar.php'); */ ?>
<!--<script src="--><?php //$this->options->themeUrl('./div_to_pdf/html2canvas.min.js'); ?><!--"></script>-->
<!--<script src="--><?php //$this->options->themeUrl('./div_to_pdf/jspdf.umd.min.js'); ?><!--"></script>-->
<!--<script src="--><?php //$this->options->themeUrl('./div_to_pdf/canvas2image.js'); ?><!--"></script>-->
<!--<script src="--><?php //$this->options->themeUrl('./div_to_pdf/div_to_pdf.js'); ?><!--"></script>-->
<script src="<?php $this->options->themeUrl('./nav/nav.js'); ?>"></script>
<script>hljs.initHighlightingOnLoad();</script>
<?php $this->need('footer.php'); ?>
