package features;


import cucumber.api.CucumberOptions;

import io.cucumber.testng.AbstractTestNGCucumberTests;

import org.testng.annotations.Test;





//@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features",glue={"stepdefs"},plugin = {"pretty","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:","html:output/html-report","json:target/cucumber-reports/Cucumber.json","junit:target/cucumber-reports/Cucumber.xml","html:target/cucumber-reports"},monochrome = true,tags = "@Test")
@Test
public class TestSiteRunner extends AbstractTestNGCucumberTests {




}


