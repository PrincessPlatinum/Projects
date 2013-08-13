<?php

/**
 * Adds <dev /> parser for wikia signatures
 *
 * @author Princess Platinum
 * Re written from staff signature.
 */

//Avoid unstubbing $wgParser on setHook() too early on modern (1.12+) MW versions, as per r35980
$wgHooks['ParserFirstCallInit'][] = 'wfSigCreate';

function wfSigCreate(&$parser) {
	$parser->setHook( 'staff', 'wfMakeDevSignature' );
	return true;
}

function wfMakeDevSignature( $contents, $attributes, $parser ) {
	$title = GlobalTitle::newFromText('Developer', 4 /*project*/, 177);
	return wfMakeSignatureCommon( $title->getFullURL(), "This user can help you with technical problems." );
}

function wfMakeSignatureCommon($Dcode=null) {

	if( empty($Dcode) ) {
		$Dcode = '[[w:c:dev|<strong style="font: new york times; font-size: 110%; color: #002d54"><b><small><sub>]Open Source[</sub></small></b></strong>]]';
	}

	return $Dcode;
}
