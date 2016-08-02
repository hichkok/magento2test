<?php

$domains = file_get_contents('domains.csv');
$domains = explode(",", $domains);
$patchProblem = false;
$checks = array(
    'patch' => 'scan:patch',
    'sitemap' => 'scan:sitemap',
    'version' => 'scan:version',
    'unreachable' => 'scan:unreachable'
);

$head = 'domain,5344,5994,6285,6482,6788,7405,sitemap,version,unprotectedpaths' . PHP_EOL;
$fp = fopen('scan.csv', 'a+');
fwrite($fp, $head);



foreach ($domains as $domain) {
    $row = $domain . ',';
    echo 'Starting: ' . $domain . PHP_EOL;
    foreach ($checks as $key => $check) {
        echo 'executing: ' . $check . PHP_EOL;
        $output = exec('php magescan.phar ' . $check . ' --format=json ' . $domain);
        $output = json_decode($output, 1);
        switch ($key) {
            case "patch" :
                if ($output) {
                        if (isset($output['results'])) {
                            $result = $output['results'];
                            foreach ($result as $patch) {
                                $row .= $patch['Status'] . ',';
                            }
                        }
                }
                break;
            case "sitemap":
                if ($output) {
                    foreach ($output['messages'] as $item) {
                        $row .= $item . ',';
                    }
                }
                break;
            case "unreachable":
                if ($output) {
                    foreach ($output['results'] as $result) {
                        if ($result['Status'] == 'Fail') {
                            $row .= $result['Path'] . ',';
                        }
                    }
                    $row .= ',';
                }
                break;
            case "version":
                if ($output) {
                    var_dump($output);
                    if (isset($output['results'][1])) {
                        $version = $output['results'][1];
                        $row .= $version['Value'] . ',';
                    }
                }
                break;
        }
    }
    $row .= PHP_EOL;
    fwrite($fp, $row);
    var_dump($row);

    echo 'Done with: ' . $domain . PHP_EOL;
}

fclose($fp);