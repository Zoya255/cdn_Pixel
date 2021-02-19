<?php
	# Appearance settings
	$CONF_LOOK_DARK = True;

	# Federal System
	$CONF_UUID       = "e15cb52d-6499-11eb-8040-002590e54834";
	$CONF_PROJECT    = "Pixel27";
	$CONF_PROJECT_ID = 3;

	# Config emails
	$CONF_EMAIL_FROM = "Pixel <info@pixel27.ru>";
	$CONF_EMAILS  = [
		"codeoon@mail.ru",
		// "optimazecode@gmail.com"
	];

	# Config DB
	$CONF_IP      = "31.31.198.49";
	$CONF_PORT    = "3306";
	$CONF_DB_LOG  = "u1212385_vashagent_easyspydb";
	$CONF_DB_WORK = "u1212385_vashagent_orderdb";
	$CONF_USER    = "u1212385_default";
	$CONF_PASS    = "11iAoy_!11iAoy_!";

	# Config 3d party
	$APIKEY = "a7b68168661077a428d006a605de4ba06ef9d688";

	# Forms settings
    $CONF_NAMES = [
		[ "id", "name", "phone", "email", "task" ]
    ];
	$CONF_PLACEHOLDERS = [
		[ "0", "имя", "телефон", "эл. почта", "задача" ]
	];
	$CONF_TYPES = [
		[ "id", [ "varchar", "r", 60 ], [ "phone", "r" ], [ "email", "r", 100 ], [ "varchar", "r", 200 ] ]
	];

	# Form generator settings
	$CONF_GEN_FORM_CLASS        = "global__section-form-form form";
	$CONF_GEN_LABEL_CLASS       = "form-label";
	$CONF_GEN_FIELD_ID_CLASS    = "form-input-id";
	$CONF_GEN_FIELD_TEXT_CLASS  = "form-input form-input-text";
	$CONF_GEN_FIELD_EMAIL_CLASS = "form-input form-input-text";
	$CONF_GEN_FIELD_PHONE_CLASS = "form-input form-input-text";

	# Useless
	$CONF_GEN_FIELD_NUM_CLASS = "number-field";
	$CONF_GEN_FIELD_URL_CLASS = "url-field";
	$CONF_GEN_TEXTAREA_CLASS  = "textarea-field";
